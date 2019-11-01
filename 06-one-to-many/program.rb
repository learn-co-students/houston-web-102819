
class Dog
  
    @@all = []

    def initialize(name, noise, breed)
      @name = name
      @noise = noise
      @breed = breed
      @@all.push(self)
    end
  
    def bark
      puts @noise
    end
  
    def name
      return @name
    end
  
    def name=(value)
      @name = value
    end
  
    def breed
      @breed
    end

    def self.all
      return @@all
    end
    
  end


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


  end

  
  husky = Breed.new("Husky", "2ft")
  chiweenie = Breed.new("Chiweenie", "6in")

  balto = Dog.new("Balto", "Ruff", husky)
  pip = Dog.new("Pip", "Yip", chiweenie)


  p chiweenie.dogs

  # p husky.dogs
  # daisy = Dog.new("Daisy", "Bark")
  # dobby = Dog.new("Dobby", "Yip")

