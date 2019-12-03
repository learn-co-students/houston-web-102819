class OwnersController < ApplicationController

    def login
        # Renders the login view
    end

    def auth
        owner = Owner.find_by({ name: params[:name]})
        if owner != nil
            if owner.authenticate(params[:password])
                puts "Login was succesful"
                session[:owner_id] = owner.id
            else 
                puts "Wrong password"
            end
        else
            puts "User does not exist"
        end
    end

end