class PassengersController < ApplicationController
    before_action :define_current_passenger
    
    def create
        passenger = Passenger.create(passenger_params)
        render json: passenger
    end
    
    def index
        render json: Passenger.all
    end
    
    def show
        render json: current_passenger, include: [ :tickets ]
    end
    
    def update
        current_passenger.update(passenger_params)
        render json: current_passenger
    end
    
    def destroy
        current_passenger.destroy
        render json: current_passenger
    end
    
    def passenger_params
        params.permit(:name)
    end
    
    def define_current_passenger
        if params[:id]
            @current_passenger = Passenger.find(params[:id])
        else
            @current_passenger = Passenger.new
        end
    end
    
    def current_passenger
        @current_passenger
    end
end