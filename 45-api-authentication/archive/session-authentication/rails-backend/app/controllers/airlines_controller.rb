class AirlinesController < ApplicationController
    before_action :define_current_airline
    
    def create
        airline = Airline.create(airline_params)
        render json: airline
    end
    
    def index
        render json: Airline.all
    end
    
    def show
        render json: current_airline
    end
    
    def update
        current_airline.update(airline_params)
        render json: current_airline
    end
    
    def destroy
        current_airline.destroy
        render json: current_airline
    end
    
    def airline_params
        params.permit(:name, :established)
    end
    
    def test_session
        session[:counter] ||= 0
        session[:counter] = session[:counter] + 1
        render json: { counter: session[:counter] }
    end

    def define_current_airline
        if params[:id]
            @current_airline = Airline.find(params[:id])
        else
            @current_airline = Airline.new
        end
    end
    
    def current_airline
        @current_airline
    end
end