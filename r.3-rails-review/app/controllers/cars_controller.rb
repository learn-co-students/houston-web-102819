class CarsController < ApplicationController

    def new
        @car = Car.new
        @owners = Owner.all
    end

    def create
        if(permitted_params[:car][:price].to_i > 0)
            @car = Car.create(permitted_params[:car])
            redirect_to "/owners/#{@car.owner_id}"
        else

        end
    end

    def edit
        @car = Car.find_by(id: params[:id])
        @owners = Owner.all
    end

    def update
        @car = Car.find_by(id: params[:id])
        @car.update(permitted_params[:car])
        redirect_to "/cars/#{@car.id}"
    end

    def destroy
        @car = Car.find_by(id: params[:id])
        @car.destroy()
        redirect_to "/owners/#{@car.owner_id}"
    end

    def permitted_params
        return params.permit({
            car: [
                :brand,
                :model,
                :price,
                :color,
                :owner_id
            ]
        })
    end

end