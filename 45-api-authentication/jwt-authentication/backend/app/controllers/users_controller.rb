class UsersController < ApplicationController

    def get_user
        user = self.current_user
        render( json: user, include: [ tickets: {
            include: [ :airline ]
        } ] )
    end

    def login
        user = User.find_by(username: params[:username])
        token = JWT.encode( { id: user.id }, 'YOUR SECRET')
        if(user.authenticate(params[:password]))
            render( json: { user: user, token: token }, include: [ tickets: {
                include: [ :airline ]
            } ] )
        else
            render( json: { failed: true, message: 'Login Failed'}) 
        end
    end


end