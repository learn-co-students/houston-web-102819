class CharactersController < ApplicationController

    def character_data
        character = Character.first
        render json: character, methods: [ :items ] # includes: [ :items ]
    end

    def update_character_data
        character = Character.first

        character.update({
            x: params[:x],
            y: params[:y]
        })

        render json: character
    end

end