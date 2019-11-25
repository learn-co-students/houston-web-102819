class PetsController < Sinatra::Base

    set(:views, './app/views/pets')

    get('/get-pets') do 
        @pets = Pet.all
        erb(:all_pets)
    end

    get('/get-pet/:id') do 
        @pet = Pet.find_by({ id: params[:id] }) 
        erb(:pet)
    end

    patch('/update-pet/:id') do 
        @pet = Pet.find_by({ id: params[:id] })
        @pet.update({
            name: params[:name],
            noise: params[:noise],
            owner_id: params[:owner_id]
        })
        erb(:pet)
    end

end

