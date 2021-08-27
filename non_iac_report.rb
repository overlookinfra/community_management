require 'optparse'
require 'csv'
require_relative 'octokit_utils'
require 'rest-client'
require 'erb'

output = File.read('modules_non_iac.json')
parsed = JSON.parse(output)

options = {}
options[:oauth] = ENV['GITHUB_COMMUNITY_TOKEN'] if ENV['GITHUB_COMMUNITY_TOKEN']
parser = OptionParser.new do |opts|
  opts.banner = 'Usage: open_and_created.rb [options]'
  opts.on('-t', '--oauth-token TOKEN', 'OAuth token. Required.') { |v| options[:oauth] = v }
  opts.on('-o', '--overview', 'Output overview, summary totals to csv') { options[:display_overview] = true }
end

parser.parse!
puts parsed

missing = []
missing << '-t' if options[:oauth].nil?
unless missing.empty?
  puts "Missing options: #{missing.join(', ')}"
  puts parser
  exit
end

util = OctokitUtils.new(options[:oauth])


result_hash = []
headers = { Authorization: "token #{options[:oauth]}" }
count = 0

def parse_job(job,module_name)
  @general_conclusion = true if job['conclusion'] == 'failure'
  matches = job['name'].split(',')
  {
    "os": matches[0],
    "agent": matches[1][1..],
    "result": job['conclusion'],
    "url": "https://github.com/#{module_name}/runs/#{job['id']}?check_suite_focus=true",
    "steps": job['steps']
  }
end

parsed.each do |m|
  util.check_limit_api()
  puts "Getting data from Github API for #{m['module_name']}"
  url = "https://api.github.com/repos/#{m['github_namespace']}/#{m['module_name']}/actions/workflows"
  result = RestClient.get(url, headers)
  data = JSON.parse(result.body)
  runs_array = []
  data['workflows'].each do |wf|
    url = "https://api.github.com/repos/#{m['github_namespace']}/#{m['module_name']}/actions/workflows/#{wf['id']}/runs"
    next unless wf['name'] == 'nightly'

    runs_json = RestClient.get(url, headers)
    runs = JSON.parse(runs_json)
    runs['workflow_runs'][0..4].each do |run|
      @general_conclusion = false
      jobs_json = JSON.parse(RestClient.get("#{run['jobs_url']}?per_page=50", headers))        
      os_agent = jobs_json['jobs'].select { |job| job['name'].include?('puppet') }.map { |job| parse_job(job, m['module_name']) }
      job_failures = os_agent.select { |x| x[:result] == 'failure' }.length
      job_successes = os_agent.select { |x| x[:result] == 'success' }.length
      util.check_limit_api()
      runs_array << {
        "run_id": run['id'],
        "run_number": run['run_number'],
        "html_url": run['html_url'],
        "updated_at": run['updated_at'],
        "head_branch": run['head_branch'],
        "os_agent": os_agent.sort_by { |hash| hash[:agent] },
        "general_conclusion": @general_conclusion,
        "job_failures": job_failures,
        "job_successes": job_successes
      }
    end

    result_hash << {
      "url": "https://github.com/#{m['module_name']}",
      "name": m['module_name'],
      "runs": runs_array.sort_by {|hash| hash[:run_number]},
      "workflows": data['workflows'],
      "total_failures": runs_array.map { |x| x[:job_failures]}.reduce(0) { |sum, num| sum + num },
      "total_successes": runs_array.map { |x| x[:job_successes]}.reduce(0) { |sum, num| sum + num },
      "last_night_failures": runs_array[0][:job_failures], 
      "last_night_successes": runs_array[0][:job_successes]
    }
  end
rescue StandardError => e
  puts "#{m['module_name']} - Error: #{e}"

  result_hash << {
    "url": "https://github.com/#{m['module_name']}",
    "name": m['module_name'],
    "workflows": 'Not available',
    "runs": [],
    "agent": 'Not available',
    "os": 'Not available'
  }
end

html = ERB.new(File.read('github_actions_non_iac.html.erb')).result(binding)
File.open('GithubActionsReport_non_IAC.html', 'wb') do |f|
  f.puts(html)
end
