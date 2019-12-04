class Receipt < ActiveRecord::Base
    belongs_to(:restaurant)
    belongs_to(:customer)

    # validates(:name, { presence: true })
    
    # validate(:name_exists)
    # def name_exists
    #     if(self.name == '')
    #         self.errors.add(:name, 'Must exist')
    #     end
    # end

    # validates(:amount, { numericality: { greater_than: 0 } })
    # validates(:amount, { numericality: { less_than: 100 } })

    validate(:amount_must_be_greater_than_zero)
    def amount_must_be_greater_than_zero
        if(self.amount <= 0)
            self.errors.add(:amount, 'Thou shalt not steal from Chick-Fil-A')
        end
    end


    
end