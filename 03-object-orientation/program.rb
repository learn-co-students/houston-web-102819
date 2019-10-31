require 'pry'


# Class - blueprint for an object
# Object - type of datastructure that merges data and behavior
# instance variables - start with @, only exist within an object
# state - variable data thats shared
# initialize - a special method that ruby calls immediately when a object created
#                   - a lifecycle method


class Dog 

    def initialize(options)
        @name = options[:name]
        @noise = options[:noise]
    end

    def bark 
        puts @noise
    end
    
    def description
        return "
            Name: #{@name}
            Noise: #{@noise}
        "
    end

end


tess = Dog.new({ name: 'Tess', noise: 'Bark!!' })
dobby = Dog.new({ name: 'Dobby', noise: 'Woof' })
daisy = Dog.new({ name: 'Daisy', noise: 'Yip'})

