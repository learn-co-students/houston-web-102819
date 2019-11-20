class AssessmentController < Sinatra::Base

    post '/send-message' do

        # params = {
        #     message: 'something'
        # }

        if params[:message] != nil
            puts params[:message]
        end

        # params = {
        #     blue: {
        #         message: 'Something'
        #     }
        # }

        if params[:blue] 
            puts params[:blue][:message].blue
        end

    end

    

end