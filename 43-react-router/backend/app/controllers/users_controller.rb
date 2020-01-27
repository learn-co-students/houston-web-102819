class UsersController < ApplicationController

    def get_user
        user = User.find_by(name: params[:name])
        render( json: user, include: [ tickets: {
            include: [ :airline ]
        } ] )
    end

    def show
        user = User.find_by(id: params[:id])
        render( json: user, include: [ tickets: {
            include: [ :airline ]
        } ] )
    end

end