class PetsController < ActionController::Base

    # skip_before_action(:verify_authenticity_token)

    def index
        @pets = Pet.all
    end

    def show
        @pet = Pet.find_by({ id: params[:id] }) 
    end

    def new
        if( flash[:errors] != nil)
            @errors = flash[:errors]
        else
            @errors = {}
        end 
    end

    def create
        pet = Pet.create(filtered_params[:pet])
        
        if pet.valid? 
            redirect_to "/pets"
        else
            # Pet is invalid
            flash[:errors] = pet.errors.messages
            redirect_to "/pets/new"
        end
    end

    def edit
        @owners = Owner.all
        @pet = Pet.find_by({ id: params[:id] }) 
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