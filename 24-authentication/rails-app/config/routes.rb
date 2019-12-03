Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources(:pets)
  # get('/pets/:id/edit', { to: 'pets#edit' })
  # patch('/pets/:id', { to: 'pets#update' })

  # Gets the form
  get('/owners/login', to: 'owners#login')

  # Handles when the form submit
  post('/owners/login', to: 'owners#auth')

  

end
