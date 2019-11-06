require 'pry'
require_relative './User.rb'
require_relative './Item.rb'
require_relative './Purchase.rb'

josh = User.new("Josh")
george = User.new("George")
nathan = User.new("Nathan")


oranges = Item.new('Oranges')
grapes = Item.new('Grapes')


binding.pry
0