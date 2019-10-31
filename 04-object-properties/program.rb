
class Dog

    def initialize(name, noise)
      @name = name
      @noise = noise
    end
  
    def bark
      puts @noise
    end
  
    # Gets you both:
    attr_accessor(:name)
    # Same as:
      # Default Getter
      # attr_reader(:name)
      # Same as:
      # def name
      #   return @name
      # end
  
      # Default Setter
      # attr_writer(:name)
      # Same as:
      # def name=(value)
      #   @name =  value
      # end
    
    # Custom Setter
    # def name=(value)
    #   if(value.length < 100)
    #     @name = value
    #   else
    #     puts "That name is too long for a dog"
    #   end
    # end
  
  
  end
  
  # Getter - gets an instance variable
  # Setter - sets an instance variable
  # Property - piece of data (instance variable) + access (getters & setter)
  
  
  
  daisy = Dog.new("Daisy", "Yipp")
  puts daisy.name
  daisy.name=("Daisy <3")
  puts daisy.name