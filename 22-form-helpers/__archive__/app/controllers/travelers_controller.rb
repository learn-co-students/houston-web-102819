class TravelersController < ApplicationController

    def new
        @traveler = Traveler.new
    end
    
    def create
        Traveler.create(params[:airline])
        redirect_to travelers_path
    end
    
    def index
        @travelers = Traveler.all
    end
    
    def update
        @traveler = Traveler.find(params[:id])
        @traveler.update(params[:airline])
        redirect_to @traveler
    end

    def show
        @traveler = Traveler.find(params[:id])
    end
    
    def destroy
        @traveler = Traveler.find(params[:id])
        @traveler.destroy
        redirect_to travelers_path
    end
   
end