team_ids = if user.teams then user.teams.pluck(:id) else [] end
project_ids = if user.projects then user.projects.pluck(:id) else [] end
avatar_url = user.avatar.url

json.extract! user, :id, :name, :email, :role, :dept, :about_me
json.set! :avatar_url, avatar_url
json.set! :team_ids, team_ids
json.set! :project_ids, project_ids
