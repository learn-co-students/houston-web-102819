class Pet

    attr_accessor(:name, :noise, :breed, :owner)

    def initialize(attributes)
        @name = attributes[:name]
        @noise = attributes[:noise]
        @breed = attributes[:breed]
        @owner = attributes[:owner]
        # @@all.push(self)
    end

    def make_mess
        puts "Whoops"
    end

end