require_relative '../config/environment.rb'


# Learn tests are handy
#   - you can see if somethings not working

# It has test data that it uses while testing your code
# You can run multiple tests with different values
# Guides you on how to fix an error
# Side by side comparison of expectation vs reality

thor = Hero.new([
    {
        name: 'Super Strength',
        coolness: 3
    },
    { 
        name:'Flight',
        coolness: 5
    },
    {
        name: 'Lightning Blast',
        coolness: 10
    }
])

binding.pry
