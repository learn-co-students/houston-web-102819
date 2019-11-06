require_relative './classes/Pet.rb'
require_relative './classes/Dog.rb'
require_relative './classes/Breed.rb'
require_relative './classes/Owner.rb'

# Class can have a parent class:
#   A class can take on the traits of another (parent) class
#   The child class can have traits specific to itself 
#       (which would override the parents behavior)
#   super is a keyword to copy the behavior of the parent class
#   Multiple levels of inheritance

#  - Breed -< Dog >- Owner

chiweenie = Breed.new("Chiweenie", "6in")

brad = Owner.new('Brad', '000-000-0000')

harry = Dog.new({ name: 'Harry', noise: 'Yipp', breed: chiweenie, owner: brad})


p Dog.all