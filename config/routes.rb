Rails.application.routes.draw do
  root to: 'home#index'
  get '/login', to: 'auth#login'
  post '/login', to: 'auth#login'
  get '/logout', to: 'auth#logout'
  post '/authenticate', to: 'auth#authenticate'
  get '/forgot_password', to: 'auth#forgot_password'
  post '/forgot_password', to: 'auth#forgot_password'
  get '/set_new_password', to: 'auth#set_new_password'
  post '/set_new_password', to: 'auth#set_new_password'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
