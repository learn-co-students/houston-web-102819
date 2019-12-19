class ApplicationController < ActionController::API

    def hello_world
        # respond to the browser:
        render json: {
            x: 100,
            y: 100
         }
    end

end
