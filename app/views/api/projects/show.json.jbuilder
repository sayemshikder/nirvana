json.set! 'project' do
  json.partial! "api/projects/project", project: @project
end

json.set! 'members' do
  @project_members.each do |member|
    json.set! member.id do
      json.partial! "api/users/user", user: member
    end
  end
end
