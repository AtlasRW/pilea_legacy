Rails.application.routes.draw do
  root 'coins#index'
  get '/team', to: 'statics#team'
  get '/project', to: 'statics#project'
  resources :selections
  resources :coins, only: [:show]
  devise_for :users
  resources :users, only: [:show, :edit, :update]
end