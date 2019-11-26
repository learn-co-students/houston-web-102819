class PetsController < ActionController::Base

    skip_before_action(:verify_authenticity_token)

    def index
        @pets = Pet.all
        # render(:index)
    end


    def show
        # byebug
        @pet = Pet.find_by({ id: params[:id] }) 
        # render(:show)
    end


    def update
        @pet = Pet.find_by({ id: params[:id] })
        @pet.update(filtered_params[:pet])
        redirect_to "/pets/#{@pet.id}"
    end


    def filtered_params
        return params.permit({
            pet:[
                :name, 
                :noise,
                :owner_id
            ]
        })

        # Same As
        # return {
        #     pet: {
        #         name: params[:pet],
        #         noise: params[:noise],
        #         owner_id: params[:owner_id]
        #     }
        # }
    end


end