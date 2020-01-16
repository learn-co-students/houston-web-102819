Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # constraints( lambda { |request| request.xhr? } ) do
    resources(:passengers)
    resources(:tickets)
    resources(:airlines)

    post('/login', to: 'authentication#login')

  # end

end
