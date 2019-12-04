Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get('/', to: 'receipts#index')

  get('/receipts', to: 'receipts#index')
  get('/receipts/new', to: 'receipts#new')
  get('/receipts/:id', to: 'receipts#show')
  post('/receipts', to: 'receipts#create')
  get('/receipts/:id/edit', to: 'receipts#edit')
  patch('/receipts/:id', to: 'receipts#update')
  delete('/receipts/:id', to: 'receipts#destroy')


  get('/login', to: 'authentication#login')

  post('/authenticate', to: 'authentication#authenticate')

end
