require 'database_cleaner'

User.destroy_all
Team.destroy_all
Project.destroy_all
Task.destroy_all

TeamMembership.destroy_all

DatabaseCleaner.clean_with(:truncation)

MAX_USERS = 15
MAX_TEAMS = 5
MAX_PROJECTS = 15
MAX_TASKS = 50

# Demo User
demo_user = User.create(
  name: "Maximus Decimus Meridius",
  role: "General",
  dept: "Legio IV Flavia Felix",
  email: "maximus@nirvana.xyz",
  password: "$#J2E*&PLGtEXupaI*x##g^GdWiJ*v",
  about_me: "My name is Maximus Decimus Meridius. Commander of the"\
    " Armies of the North. General of the Felix Legions. Loyal servant"\
    " to the true Emperor, Marcus Aurelius.",
  avatar_url: "https://i.imgur.com/R4NaNBC.png"
)

team = Team.create(name: 'Exercitus Romanus', leader_id: demo_user.id)
TeamMembership.create(team_id: team.id, user_id: demo_user.id)

(MAX_USERS - 1).times do
  faker_user = Faker::Omniauth.google
  email = faker_user[:info][:email]

  User.create(
    name: faker_user[:info][:name],
    role: Faker::Lovecraft.tome,
    dept: Faker::Lovecraft.location,
    email: email,
    password: faker_user[:credentials][:token],
    about_me: Faker::Lovecraft.sentence,
  )
end

(MAX_TEAMS - 1).times do |n|
  Team.create(
    name: "#{n + 2}: #{Faker::Pokemon.move}",
    leader_id: rand(1..MAX_USERS))
end

TeamMembership.create(team_id: 2, user_id: demo_user.id)
TeamMembership.create(team_id: 3, user_id: demo_user.id)

User.all.each do |user|
  # if user.id != 1
  #   TeamMembership.create(
  #     user_id: user.id,
  #     team_id: Team.all.sample.id
  #   )
  # end

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

MAX_PROJECTS.times do
  Project.create(name: Faker::OnePiece.location,
                 description: Faker::Company.catch_phrase,
                 team_id: Team.all.sample.id
                )
end

tasks_per_project = MAX_TASKS / MAX_PROJECTS
Project.all.each do |proj|
  tasks_per_project.times do
    Task.create!(name: Faker::Company.bs,
                 description: Faker::Hipster.sentence,
                 due_date: Faker::Time.between(DateTime.now, DateTime.now),
                 creator_id: team.members.sample.id,
                 project_id: proj.id,
                 completed: false
                )
  end
end
