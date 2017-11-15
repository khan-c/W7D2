Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :todos, except: [:new, :edit]
  end

  get '/root', to: 'static_pages#root', as: 'root'
end