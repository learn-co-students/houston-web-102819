Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get('/', to: 'airlines#index')


  # def resources(name)
  #   name = name.to_s
  #   get("/#{name}", to: "#{name}#index")
  #   get("/#{name}/new", to: "#{name}#new")
  #   get("/#{name}/:id", to: "#{name}#show")
  #   post("/#{name}", to: "#{name}#create")
  #   get("/#{name}/:id/edit", to: "#{name}#edit")
  #   patch("/#{name}/:id", to: "#{name}#update")
  #   delete("/#{name}/:id", to: "#{name}#destroy")
  # end

  resources(:airlines, :travelers)

end
