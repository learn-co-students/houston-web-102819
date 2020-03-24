# Owner -< Dogs >- Breeds
# has_many(:breeds, through: :dogs)

class Owner < ActiveRecord::Base

    has_many(:dogs)

    has_many(:breeds, through: :dogs)


    # def dogs
    #     Dog.where({ owner_id: self.id })
    # end

    # def breeds
    #     results = []
    #     self.dogs.each do | dog |
    #         results.push(dog.breed )
    #     end  
    #     results
    # end

end