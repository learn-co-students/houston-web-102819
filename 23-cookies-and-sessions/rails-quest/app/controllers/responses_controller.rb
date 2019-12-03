class ResponsesController < ApplicationController

    def new
        @message = flash[:message]
        @number_correct=  session[:number_correct]
        @question = Question.all.sample
        @question_response = Response.new({ question: @question })
    end

    def create
        if session[:number_correct] == nil
            session[:number_correct] = 0
        end
        @number_correct = session[:number_correct]
        response = Response.create(filtered_params[:response])
        if response.question.correct_answer == response.answer
            puts "----------------------------------"
            puts "Selected Correct: #{response.answer.content} "
            @number_correct = @number_correct + 1
            @message = "Correct"
        else
            puts "----------------------------------"
            puts "Selected Incorrect: #{response.answer.content} "
            @message = "Incorrect"
        end
        flash[:message] = @message
        session[:number_correct] = @number_correct
        puts "----------------------------------"
        puts "Correct so far: #{@number_correct}"
        redirect_to '/random-question'
    end

    def filtered_params
        params.permit(
            response: [
                :answer_id, 
                :question_id
            ]
        )
    end

end
