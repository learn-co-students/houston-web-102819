class ApplicationController < Sinatra::Base

    # def run
    #     if(request[:method] == 'GET' && request[:path] == '/get-pet')
    #         # Get a pet and send it as the response
    #     end
    # end

    # Displays a pet
    get('/get-pet/:id') do # get-pet/Tess
        @pet = Pet.find_by({ id: params[:id] }) # <-- params[:id] == Tess
        erb(:pet)
    end

    get('/get-pets') do 
        @pets = Pet.all
        erb(:all_pets)
    end

    set(:views, './app/views')


    ## Update a pet (patch or post or put)
    post('/update-pet/:id') do 
        pet = Pet.find_by({ id: params[:id] })
        pet.update({
            name: params[:name], # params[:name] => "Dorothy"
            noise: params[:noise] # params[:noise] => "Bark"
        })
    end

   
    # get('/*') do # <-- Catch any request
    #     redirect('/get-pet') # <-- Send it somewhere else
    # end

end

