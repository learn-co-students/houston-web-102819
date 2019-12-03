class AuthenticationController < ApplicationController

    skip_before_action :check_for_authentication

    def login
    end

    def authenticate
        customer = Customer.find_by({ name: params[:name] })
        if customer != nil && customer.authenticate(params[:password])
            session[:current_customer_id] = customer.id
            redirect_to "/receipts"
        end
    end

end