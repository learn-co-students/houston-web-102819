class ApplicationController < Sinatra::Base

    set(:views, 'app/views')

    get('/') do 
        "Hello World"
    end

    get('/my-tickets/:user_id') do 
        @user = Passenger.find(params[:user_id] )
        # @tickets = @user.tickets
        erb(:"my-tickets")
    end

    get('/purchase-ticket/:user_id') do
        @user_id = params[:user_id]
        @tickets = Ticket.where({ passenger_id: nil})
        erb(:"purchase-ticket")
    end

    post('/checkout/:user_id') do 
        passenger = Passenger.find(params[:user_id])
        passenger.update({ ticket_ids: params[:ticket_ids] })
        redirect( "/my-tickets/#{passenger.id}" )
    end




    get('/admin/create-ticket') do 
        erb(:'create-ticket')
    end


    post('/admin/create-ticket') do
        # Ticket.create(params)
        # ^ Same as
        Ticket.create({
            location: params[:location],
            seat_number: params[:seat_number],
            cost: params[:cost],
            airline_id: params[:airline_id],
        })
        redirect('/success-message')
    end





    get('/success-message') do 
        erb(:"success-message")
    end








end