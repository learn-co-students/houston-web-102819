class User < ApplicationRecord
    

    def purchase(amount)
        if(self.dollars > amount)
            transaction = Transaction.create({ amount: amount })
            self.update({ dollars: self.dollars - amount })
            return transaction
        else 
            # The user doesn't have enough money
        end
    end
    

end



class Transaction < ApplicationRecord

end




class TransactionsController < ApplicationController

    def create
        current_user = User.find(session[:user_id])
        transaction = current_user.purchase(params[:amount])
        redirect_to "/transactions/#{transaction.id}"
    end

    

end