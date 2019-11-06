class Breed

    def initialize(name, height)
      @name = name
      @height = height
    end

    def name 
      return @name
    end

    def name=(value)
      @name = value
    end

    def height 
      return @height
    end

    def height=(value)
      @height = value
    end

    def dogs
      results = []
      Dog.all.each do | dog |
        if(dog.breed == self) # <-- self is a breed
          results.push(dog)
        end
      end
      return results
    end

    def owners
      results = []
      Dog.all.each do | dog |
        if(dog.breed == self)
          results.push(dog.owner)
        end
      end
      return results.uniq
    end


  end