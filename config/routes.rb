Rails.application.routes.draw do
  root to: 'home#index'
  get '/login', to: 'auth#login'
  post '/login', to: 'auth#login'
  get '/logout', to: 'auth#logout'
  post '/authenticate', to: 'auth#authenticate'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
