Rails.application.routes.draw do
  root 'pages#welcome'

  devise_for :users
  
  resources :posts

  get 'pages/welcome'
  get 'pages/about'
  get 'admin' => 'pages#admin'
end
