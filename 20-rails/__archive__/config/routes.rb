Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get('/test', to: 'test#index')

  get('/receipts', to: 'receipts#index')
  get('/receipts/new', to: 'receipts#new')
  post('/receipts', to: 'receipts#create')
  get('/receipts/:id', to: 'receipts#show')

end
