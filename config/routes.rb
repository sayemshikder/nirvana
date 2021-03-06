Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[index show create]

    resources :users, only: %i[show] do
      resources :tasks, only: %i[index]

      resources :teams, only: %i[show] do
        resources :tasks, only: %i[index]
      end
    end

    resources :teams, only: %i[index show] do
      resources :users, only: %i[index]
    end

    resources :projects, only: %i[show] do
      resources :tasks, only: %i[index]
    end

    resources :teams, only: %i[show] do
      resources :projects, only: %i[index]
      resources :tasks, only: %i[index]
    end

    resources :tasks, only: %i[create show update]

    resource :session, only: %i[create destroy]
  end

  root "static_pages#root"
end
