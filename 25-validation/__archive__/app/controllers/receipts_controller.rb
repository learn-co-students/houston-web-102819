class ReceiptsController < ApplicationController 
    
    def index
        @receipts = current_user.receipts
    end

    def show 
        @receipt = Receipt.find(params[:id])
    end

    def new

        if(flash[:receipt_attributes])
            @receipt = Receipt.new(flash[:receipt_attributes])
        else
            @receipt = Receipt.new
        end

    end

    def create

        @receipt = Receipt.create({
            amount: params[:amount],
            restaurant_id: params[:restaurant_id],
            customer_id: current_user.id
        })

        if(@receipt.valid?)
            redirect_to '/receipts'
        else
            flash[:receipt_attributes] = @receipt.attributes
            redirect_to '/receipts/new'
        end
    end

    def edit
        if(flash[:receipt_attributes])
            @receipt = Receipt.new(flash[:receipt_attributes])
        else
            @receipt = Receipt.find(params[:id])
        end 
    end

    def update
        @receipt = Receipt.find(params[:id])
        @receipt.update({
            amount: params[:amount],
            restaurant_id: params[:restaurant_id]
        })
        redirect_to "/receipts/#{@receipt.id}"
    end

    def destroy
        @receipt = Receipt.find(params[:id])
        @receipt.destroy
        redirect_to "/receipts"
    end


end