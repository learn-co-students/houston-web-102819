class Owner 
    @@all = []

    def initialize(name, phone_number)
        @name = name 
        @phone_number = phone_number
        @@all.push(self)
    end

    def name
        @name 
    end

    def name=(value)
        @name=value
    end

    def phone_number
        @phone_number 
    end

    def phone_number=(value)
        @phone_number=value
    end

    def dogs
        result = []
        Dog.all.each do | dog |
            if(dog.owner == self)
                result.push(dog)
            end
        end
        return result
    end

    def self.all
        return @@all
    end

end