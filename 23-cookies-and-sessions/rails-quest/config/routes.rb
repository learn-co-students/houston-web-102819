Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :responses
  root to: 'responses#new'
  get :'random-question', to: 'responses#new'
end
