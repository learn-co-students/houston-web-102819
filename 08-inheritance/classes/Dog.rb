class Dog < Pet
  
    @@all = []

    def initialize(attributes)
      super(attributes) # <-- Call the parents initialize
      @@all.push(self)
    end

    def bark
      puts @noise
    end
  
    def self.all
      return @@all
    end

    def uncondional_love
      puts "<3"
    end
    
  end