class PetsController < ActionController::Base

    skip_before_action(:verify_authenticity_token)

    def get_pets
        @pets = Pet.all
        render(:all_pets)
    end


    def get_pet_by_id
        @pet = Pet.find_by({ id: params[:id] }) 
        render(:pet)
    end


    def update
        @pet = Pet.find_by({ id: params[:id] })
        @pet.update(filtered_params[:pet])
        render(:pet)
    end

    def create
        Pet.create({
            name: params[:pet],
            noise: params[:noise],
            owner_id: params[:owner_id]
        })
        render(:pet)
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