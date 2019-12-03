class ReceiptsController < ApplicationController
    
    def index
        @username = current_user.name
        @receipts = Receipt.all
    end

    def show 
        @receipt = Receipt.find(params[:id])
    end

    def new
    end

    def edit
        @receipt = Receipt.find(params[:id])
    end

    def create
        Receipt.create({
            amount: params[:amount],
            restaurant_id: params[:restaurant_id],
            customer_id: params[:customer_id]
        })
        redirect_to '/receipts'
    end

    def update
        @receipt = Receipt.find(params[:id])
        @receipt.update({
            amount: params[:amount],
            restaurant_id: params[:restaurant_id],
            customer_id: params[:customer_id]
        })
        redirect_to "/receipts/#{@receipt.id}"
    end

    def destroy
        @receipt = Receipt.find(params[:id])
        @receipt.destroy
        redirect_to "/receipts"
    end


end