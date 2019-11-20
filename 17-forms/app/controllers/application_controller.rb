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

    # <form method="post" action="/update-pet/<%= @pet.id %>">
    #     <input type="hidden" name="_method" value="patch">
    #     <p>Pet Name</p>
    #     <input name="name" type="text"  value="<%= @pet.name %>" />
    #     <p>Pet Noise</p>
    #     <input name="noise" type="text" value="<%= @pet.noise  %>" />
    #     <input type="submit" />
    # </form>

    ## Update a pet (patch or post or put)
    patch('/update-pet/:id') do 
        @pet = Pet.find_by({ id: params[:id] })
        @pet.update(params[:pet])
        # @pet.update({
        #     name: params[:pet][:name], # params[:name] => "Dorothy"
        #     noise: params[:pet][:noise] # params[:noise] => "Bark"
        # })
        erb(:pet)
    end

   
    # get('/*') do # <-- Catch any request
    #     redirect('/get-pet') # <-- Send it somewhere else
    # end

end

