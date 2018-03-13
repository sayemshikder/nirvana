# json.set! @user.id do
#   json.partial! "api/users/user", user: @user
# end
@team_members.each do |member|
  json.set! member.id do
    json.partial! "api/users/user", user: member
  end
end
