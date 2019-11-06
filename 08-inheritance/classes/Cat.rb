class Cat < Pet

    @@all = []
  
    def meow
      puts @noise
    end

    def self.all
      return @@all
    end
    
  end