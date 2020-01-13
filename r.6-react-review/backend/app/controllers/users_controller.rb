class UsersController < ApplicationController

    def get_user
        user = User.find_by(name: params[:name])
        render( json: user, include: [ tickets: {
            include: [ :airline ]
        } ] )
    end

end