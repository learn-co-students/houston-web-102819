class TicketsController < ApplicationController
    before_action :define_current_ticket
    
    def create
        if(ticket_params[:passenger_id] == self.current_user.id)
            ticket = Ticket.create(ticket_params)
            render json: ticket
        else
            render json: { error: true, message: 'You cannot buy a ticket for someone else' }
        end
    end
    
    def index
        render json: Ticket.all
    end
    
    def show
        render json: current_ticket
    end
    
    def update
        current_ticket.update(ticket_params)
        render json: current_ticket
    end
    
    def destroy
        current_ticket.destroy
        render json: current_ticket
    end
    
    def ticket_params
        params.permit(:passenger_id, :airline_id)
    end
    
    def define_current_ticket
        if params[:id]
            @current_ticket = Ticket.find(params[:id])
        else
            @current_ticket = Ticket.new
        end
    end
    
    def current_ticket
        @current_ticket
    end
end