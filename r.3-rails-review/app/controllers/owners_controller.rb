class OwnersController < ApplicationController

    def index
        @owners = Owner.all
    end

    def show
        # Shorthand:
        # @owner = Owner.find(params[:id])
        @owner = Owner.find_by({ id: params[:id] })
    end

end