Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'top_pages#home'
  get '/teams', to: 'teams#index'
  get '/profiles', to: 'profiles#index'
  get '/profiles/new', to: 'profiles#new'
  post '/profiles', to: 'profiles#create'
end
