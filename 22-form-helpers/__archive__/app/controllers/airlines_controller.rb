class AirlinesController < ApplicationController

    def index 
        @airlines = Airline.all
    end

    def show 
        @airline = Airline.find(params[:id])
    end
    
    def edit
        @airline = Airline.find(params[:id])
        @travelers = Traveler.all
    end

    def update
        @airline = Airline.find(params[:id])

        # params = {
        #     airline: {
        #         id: 42
        #     }
        # }

        # This is mass assignment
        @airline.update({params[:airline]})
        
        # The same as
        # @airline.update({ 
        #     name: params[:airline][:name], 
        #     established: params[:airline][:established] 
        # })
        
        
        redirect_to("/airlines/#{@airline.id}")
    end
    

    def new
        @airline = Airline.new
    end
    
    def create
        Airline.create(airline_params)
        redirect_to("/airlines")
    end
    
    def airline_params
        # Gets the airline hash out of params
        params[:airline]
        # Does the same thing:
        return params.require(:airline).permit(:name, :established)
    end

end