class ApplicationController < Sinatra::Base

    set(:views, './app/views')

   
    get('/pantry') do 
        @items = PantryItem.all # params
        erb(:item_list)
    end

    post('/add-item') do 
        PantryItem.create({
            name: params[:name],
            category: params[:category],
            quantity: params[:quantity]
        })
        redirect '/pantry'
    end

end