Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources(:cars) # Good practice: only: [ :new, :create, :edit, :update, :destroy]
  resources(:users)


end
