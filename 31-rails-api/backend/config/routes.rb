Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get('/hello-world', { to: 'application#hello_world'})

  get('/characterData', { to: 'characters#character_data'})

  post('/characterData', { to: 'characters#update_character_data'})

end
