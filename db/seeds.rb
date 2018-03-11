# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'database_cleaner'

User.destroy_all
Team.destroy_all
TeamMembership.destroy_all
Project.destroy_all

DatabaseCleaner.clean_with(:truncation)

MAX_USERS = 5
MAX_TEAMS = 3

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
team = Team.create(name: 'Armies of the North', leader_id: demo_user.id)
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

MAX_TEAMS.times do
  Team.create(name: Faker::Lovecraft.sentence(3, 1), leader_id: rand(1..MAX_USERS))
end

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
