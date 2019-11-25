Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get('/get-pets', { to: 'pets#get_pets'})
  get('/get-pet/:id', { to: 'pets#get_pet_by_id' })
  post('/update-pet/:id', { to: 'pets#update' })

end
