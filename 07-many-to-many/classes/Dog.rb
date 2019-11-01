class Dog
  
    @@all = []

    def initialize(name, noise, breed, owner)
      @name = name
      @noise = noise
      @breed = breed
      @owner = owner
      @@all.push(self)
    end
  
    def bark
      puts @noise
    end
  
    def name
      return @name
    end

    def noise
      return @noise
    end
  
    def name=(value)
      @name = value
    end
  
    def breed
      @breed
    end

    def owner 
      @owner
    end

    def self.all
      return @@all
    end
    
  end