Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[index show create]
    resources :teams, only: %i[index]
    resources :projects, only: %i[show]
    resource :session, only: %i[create destroy]
  end

  root "static_pages#root"
end
