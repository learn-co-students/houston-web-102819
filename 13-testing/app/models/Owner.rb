class Owner < ActiveRecord::Base

    has_many(:dogs)
    has_many(:breeds, through: :dogs)

    def youngest_dog
        self.dogs.min_by do | dog |
            dog.age
        end
    end

end