class CarsController < ApplicationController

    def new
        @users = User.all
    end

    def create
        Car.create({
            make: params[:make],
            model: params[:model],
            year: params[:year],
            user_id: params[:user_id]
        })
        redirect_to "/users/#{params[:user_id]}"
    end

    def edit
        @car = Car.find_by({ id: params[:id] })
        @users = User.all
    end

    def update
        car = Car.find_by({ id: params[:id] })
        car.update({
            make: params[:make],
            model: params[:model],
            year: params[:year],
            user_id: params[:user_id]
        })
    end

    def destroy
        car = Car.find_by({ id: params[:id] })
        car.destroy()
        redirect_to "/users/#{car.user_id}"
    end

end