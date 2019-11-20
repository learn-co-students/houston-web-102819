class OwnersController < Sinatra::Base

    set(:views, './app/views/owners')

    get('/get-owner/:id') do 
        @owner = Owner.find_by({ id: params[:id] }) 
        erb(:owner)
    end

    patch('/update-owner/:id') do 
        binding.pry
        @owner = Owner.find_by({ id: params[:id] })
        @owner.update({
            name: params[:name],
            pet_ids: params[:pet_ids]
        })
        erb(:owner)
    end

end

