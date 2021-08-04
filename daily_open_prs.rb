#!/usr/bin/env ruby
# frozen_string_literal: true

# This script is to output a csv file to tally how many PRs are currently open on each day between two date ranges. It is also split into both PRs raised by community members and PRs raised by Puppet members.

require 'csv'
require_relative 'octokit_utils'
require_relative 'options'

options = parse_options do |opts|
  opts.on('-o', '--overview', 'Output overview, summary totals to csv') { options[:display_overview] = true }
end

parsed = load_url(options)
util = OctokitUtils.new(options[:oauth])

all_pulls = []
pr_cache = []

parsed.each do |_k, v|
  # Retrieves all PRs for the repo
  pr_cache = util.fetch_async((v['github']).to_s, { state: 'open' }, [])
  pr_cache.concat(util.fetch_async((v['github']).to_s, { state: 'closed' }, []))

  pr_cache.each do |pr|
    all_pulls.push(pr[:pull])
  end
end

puppet_members = {}
puppet_members = util.puppet_organisation_members(all_pulls)

# Defines the dates required
end_date = Time.now.to_date
start_date = end_date - 20

# Currently open per day
days = []
open_prs = []
(start_date..end_date).each do |day_to_check|
  puppet_prs = 0
  community_prs = 0
  created_puppet_prs = 0
  created_community_prs = 0
  all_pulls.each do |pull|
    next unless pull.user[:type] == 'User'

    if pull[:created_at].to_date == day_to_check
      if puppet_members.key?(pull.user[:login])
        created_puppet_prs += 1
      else
        created_community_prs += 1
      end
    end
    if pull[:state] == 'closed'
      if (pull[:closed_at].to_date >= day_to_check) && (pull[:created_at].to_date <= day_to_check)
        if puppet_members.key?(pull.user[:login])
          puppet_prs += 1
          puts puppet_prs
        else
          community_prs += 1

        end

      end
    elsif (pull[:state] == 'open') && (pull[:created_at].to_date <= day_to_check)
      if puppet_members.key?(pull.user[:login])

        puppet_prs += 1
      else
        community_prs += 1
      end
    end
  end
  daily_total = community_prs + puppet_prs
  row = { 'date' => day_to_check.strftime('%F'), 'community' => community_prs, 'puppet' => puppet_prs, 'total' => daily_total }
  open_row = { 'date' => day_to_check.strftime('%F'), 'puppet' => created_puppet_prs, 'community' => created_community_prs }
  days.push(row)
  open_prs.push(open_row)
end
# Creates the CSV files
CSV.open('daily_open_prs.csv', 'wb') do |csv|
  csv << %w[community puppet]
  days.each do |day|
    csv << [day['community'], day['puppet']]
  end
end
CSV.open('created_per_day.csv', 'wb') do |csv|
  csv << %w[date puppet community]
  open_prs.each do |o|
    csv << [o['date'], o['puppet'], o['community']]
  end
end
