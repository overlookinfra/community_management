 #!/usr/bin/env ruby
# frozen_string_literal: true

# This script for every week will calculate:
# the number of closed prs
# the number of merged prs
# the number of comments made on prs
require 'csv'
require_relative 'octokit_utils'
require_relative 'options'

options = parse_options

parsed = load_url(options)

util = OctokitUtils.new(options[:oauth])

number_of_weeks_to_show = 10

def date_of_next(day)
  date  = Date.parse(day)
  delta = date > Date.today ? 0 : 7
  date + delta
end

# find next wedenesday, set boundries
right_bound = date_of_next 'Wednesday'
left_bound = right_bound - 7
since = (right_bound - (number_of_weeks_to_show * 7))

all_merged_pulls = []
all_closed_pulls = []
comments = []
members_of_organisation = {}

# gather all commments / merges / closed in our time range (since)
parsed.each do |_k, v|
  util.check_limit_api
  closed_pr_information_cache = util.fetch_async((v['github']).to_s, { state: 'closed' }, [:issue_comments], attribute: 'closed_at', date: since)
  # closed prs
  all_closed_pulls.concat(util.fetch_unmerged_pull_requests(closed_pr_information_cache))
  
  # merged prs
  all_merged_pulls.concat(util.fetch_merged_pull_requests(closed_pr_information_cache))
  # find organisation members, if we havent already
  members_of_organisation = util.puppet_organisation_members(all_merged_pulls) if members_of_organisation.empty? && !all_merged_pulls.size.zero?
  # all comments made by organisation members
  closed_pr_information_cache.each do |pull|
    next if pull[:issue_comments].empty? && pull[:pull][:user][:type] == 'User'

    pull[:issue_comments].each do |comment|
      comments.push(comment) if members_of_organisation.key?(comment.user.login)
    end
  end

  puts "repo #{v}"
end

week_data = []
# for gathered comments / merges / closed, which week does it belong to
(0..number_of_weeks_to_show - 1).each do |_week_number|
  # find closed
  closed = 0
  closed_by_tc =0 
  all_closed_pulls.each do |pull|
    util.check_limit_api
    if util.trusted_contributor?(pull[:user][:login])
       closed_by_tc += 1 if (pull[:closed_at] < right_bound.to_time) && (pull[:closed_at] > left_bound.to_time) && pull[:user][:type] == 'User'
    else 
       closed += 1 if (pull[:closed_at] < right_bound.to_time) && (pull[:closed_at] > left_bound.to_time) && pull[:user][:type] == 'User'
    end
  end
  # find merged
  merged_by_tc = 0
  merged = 0
  all_merged_pulls.each do |pull|
    util.check_limit_api
    if util.trusted_contributor?(pull[:user][:login])
       merged_by_tc += 1 if (pull[:closed_at] < right_bound.to_time) && (pull[:closed_at] > left_bound.to_time) && pull[:user][:type] == 'User'
    else
       merged += 1 if (pull[:closed_at] < right_bound.to_time) && (pull[:closed_at] > left_bound.to_time) && pull[:user][:type] == 'User'
    end
  end
  # find commments from puppet
  comment_count = 0
  commented_by_tc = 0
  comments.each do |iter|
    util.check_limit_api
    if util.trusted_contributor?(iter[:user][:login])
    commented_by_tc += 1 if (iter[:created_at] < right_bound.to_time) && (iter[:created_at] > left_bound.to_time)
    else 
    comment_count += 1 if (iter[:created_at] < right_bound.to_time) && (iter[:created_at] > left_bound.to_time)
    end
  end

  row = { 'week ending on' => right_bound, 'closed' => closed, 'commented' => comment_count, 'merged' => merged, 'closed_by_tc' => closed_by_tc, 'commented_by_tc' => commented_by_tc, 'merged_by_tc' => merged_by_tc }
  week_data.push(row)
  # move boundries
  right_bound = left_bound
  left_bound = right_bound - 7
end
# reverse week_data to give it in chronological order
week_data = week_data.reverse

CSV.open('pr_work_done.csv', 'wb') do |csv|
  csv << ['week ending on', 'closed', 'commented', 'merged', 'closed_by_tc', 'commented_by_tc', 'merged_by_tc']
  week_data.each do |week|
    csv << [week['week ending on'], week['closed'], week['commented'], week['merged'], week['closed_by_tc'], week['commented_by_tc'], week['merged_by_tc']]
  end
end
