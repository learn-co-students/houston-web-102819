
class Square

    def overlap
    end
  
    def self.overlap
  
    end
  
  end
  
  store_sign = Square.new
  road_sign = Square.new
  parking_sign = Square.new
  
  if road_sign.overlap(store_sign, parking_sign) > 10
  
  end
  
  
  if Square.overlap(road_sign, store_sign, parking_sign) > 10
    
  end
  
  
  
  
  
  
  
  
  
  
  # Class Variables
  # - attached to the class instead of an object
  # - defined with 2 @@ signs
  
  
  
  class Dog
  
     @@breeds = [
        {
          name: "Terrier",
          size: "1ft"
        },
        {
          name: "Chiweenie",
          size: "8in"
        }
    ]
  
    def initialize(name, noise)
      @name = name
      @noise = noise
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
  
    def self.breeds
      return @@breeds
    end
    
  end
  
  daisy = Dog.new("Daisy", "Bark")
  dobby = Dog.new("Dobby", "Yip")
  
  Dog.breeds.push({
    name: 'Husky',
    size: '2ft'
  })
  
  p Dog.breeds
  
  # p "Daisy: #{Dog.breeds.length}"
  # p "Dobby: #{Dog.breeds.length}"