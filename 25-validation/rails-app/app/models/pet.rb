class Pet < ActiveRecord::Base
    belongs_to(:owner)


    validate do 
        if(self.name.length == 0)
            self.errors.add(:name, 'Must provide a name')
        end

        if(self.noise.length == 0)
            self.errors.add(:noise, 'Must provide a noise')
        end
    end

end