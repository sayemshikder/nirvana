@teammates.each do |mate|
  json.set! mate.id do
    json.partial! "api/users/user", user: mate
  end
end
