Rails.application.routes.draw do
  resources :spreads
  scope :api do 
    resources :users
    resources :cards
    post "/sessions", to: "sessions#create"
    delete "/sessions", to: "sessions#destroy"
  end



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
