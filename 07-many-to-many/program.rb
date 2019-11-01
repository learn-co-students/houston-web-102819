require_relative './classes/Dog.rb'
require_relative './classes/Breed.rb'
require_relative './classes/Owner.rb'
  
#  - Breed -< Dog >- Owner
chiweenie = Breed.new("Chiweenie", "6in")

brad = Owner.new('Brad', '000-000-0000')
dobby = Dog.new('Dobby', 'Yipp', chiweenie, brad)
harry = Dog.new('Harry', 'Yipp', chiweenie, brad)

p chiweenie.owners

husky = Breed.new("Husky", "2ft")

# balto = Dog.new("Balto", "Ruff", husky)
# pip = Dog.new("Pip", "Yip", chiweenie)


class Airline

    # def tickets
    #     results = []
    #     Ticket.all.each do | ticket |
    #         if(ticket.airline  == self)
    #             results.push(ticket)
    #         end
    #     end
    #     return results
    # end

    # [ 1, 2, 3].map do | number |
    #     number + 1
    # end


    def tickets
        return Ticket.all.select do | ticket |
            ticket.airline == self
        end
    end

    def passengers
        return self.tickets.map do | ticket |
            ticket.passenger
        end
        
        # results = []
        # Ticket.all.each do | ticket |
        #     if(ticket.airline  == self)
        #         results.push(ticket.passenger)
        #     end
        # end
        # return results
    end

end




# One to Many Relationship
# - Receipt >- Customer
# - Dog >- Breed

# Many to Many Relationship
#  - Restaurant -< Receipt >- Customer
#  - Restaurant -< Review >- Customer
# (These dont really exist)

# Join Class
# - Its going to belong to two other classes
# - (It will have instance variables for those two other classes)



# p husky.dogs
# daisy = Dog.new("Daisy", "Bark")
# dobby = Dog.new("Dobby", "Yip")

