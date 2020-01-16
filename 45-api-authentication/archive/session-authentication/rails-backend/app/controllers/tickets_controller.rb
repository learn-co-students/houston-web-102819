class TicketsController < ApplicationController
    
    def create
        if(ticket_params[:passenger_id].to_i == current_user.id)
            ticket = Ticket.create(ticket_params)
            render json: ticket
        else
            render json: { error: true, message: 'You cannot buy a ticket for someone else' }
        end
    end
    
    def ticket_params
        params.permit(:passenger_id, :airline_id)
    end
    
end