class TicketsController < ApplicationController

    def index 
        @tickets = Ticket.where({ user_id: nil })
        render json: @tickets, include: [ :airline ]
    end

    def update
        @ticket = Ticket.find(params[:id])
        @ticket.update({
            user_id: params[:user_id]
        })
        render json: @ticket, include: [ :airline ]
    end

end