Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources(:pets)
  # get('/pets/:id/edit', { to: 'pets#edit' })
  # patch('/pets/:id', { to: 'pets#update' })


  

end
