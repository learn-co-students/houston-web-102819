class AuthenticationController < ApplicationController

    def login
        passenger, * = Passenger.where({ name: params[:name]})
        if(passenger && passenger.authenticate(params[:password]))
            session[:user_id] = passenger.id
            render json: { success: true, id: passenger.id }
        else
            render json: { success: false, id: nil }
        end
    end


end