require 'database_cleaner'
require 'date'

User.destroy_all
Team.destroy_all
Project.destroy_all
Task.destroy_all

TeamMembership.destroy_all

DatabaseCleaner.clean_with(:truncation)

MAX_USERS = 9
MAX_TEAMS = 3
MAX_PROJECTS = 15
MAX_TASKS_PER_TEAM = 20

# Demo User
demo_user = User.create(
  name: "Demo User",
  role: "Demo Role",
  dept: "Demo Department",
  email: "demo@nirvana.xyz",
  password: "$#J2E*&PLGtEXupaI*x##g^GdWiJ*v",
  about_me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"\
    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"\
    "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"\
    "ea commodo consequat."
)

demo_team = Team.create(name: 'Demo User\'s Team', leader_id: demo_user.id)
TeamMembership.create(team_id: demo_team.id, user_id: demo_user.id)

(MAX_USERS - 1).times do |i|
  faker_user = Faker::Omniauth.google
  email = faker_user[:info][:email]

  User.create(
    name: faker_user[:info][:name] + " u#{i + 2}",
    role: Faker::Company.profession.titleize,
    dept: Faker::Commerce.department,
    email: email,
    password: faker_user[:credentials][:token],
    about_me: Faker::Lovecraft.sentence,
  )
end

(MAX_TEAMS - 1).times do |i|
  Team.create(
    name: Faker::Company.name + " t#{i + 2}",
    leader_id: rand(1..MAX_USERS))
end

TeamMembership.create(team_id: 2, user_id: demo_user.id)
TeamMembership.create(team_id: 3, user_id: demo_user.id)

User.all.each do |user|
  if user.id != 1
    # Add user to random number of teams
    random_team_ids = Array.new(rand(1..MAX_TEAMS)) { rand(1..MAX_TEAMS) }
    random_team_ids.uniq!
    random_team_ids.each do |team_id|
      TeamMembership.create(
        user_id: user.id,
        team_id: team_id
      )
    end
  end
end

MAX_PROJECTS.times do |i|
  Project.create(name: Faker::Commerce.product_name + " p#{i + 1}",
                 description: Faker::Company.catch_phrase,
                 team_id: Team.all.sample.id
                )
end

task_count = 0
Team.all.each do |team|
  MAX_TASKS_PER_TEAM.times do
    random_proj_id = team.projects.sample.id
    now = Date.today
    Task.create!(name: Faker::Company.bs.capitalize + " p#{random_proj_id} t#{task_count + 1}",
                 description: Faker::Hipster.sentence,
                 due_date: Faker::Time.between(Date.new(now.year, 1, 1), Date.new(now.year + 1, 12, 31)),
                 creator_id: team.members.sample.id,
                 assignee_id: team.members.sample.id,
                 project_id: random_proj_id,
                 completed: false
                )
    task_count += 1
  end
end
