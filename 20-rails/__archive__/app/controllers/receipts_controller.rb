class ReceiptsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @receipts = Receipt.all
    end

    # get('/receipts/:id') do
    def show 
        @receipt = Receipt.find(params[:id])
    end

    # get('/receipts/new') do 
    def new
    end

    # post('/receipts') do 
    def create
        Receipt.create({
            amount: params[:amount],
            restaurant_id: params[:restaurant_id],
            customer_id: params[:customer_id]
        })
        redirect_to '/receipts'
    end


end