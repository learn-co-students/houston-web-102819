require 'sqlite3'
db = SQLite3::Database.new('pets.db')
db.results_as_hash = true

puts "Please enter your dogs name:"
pet_name = gets.chomp # => asking for user input

pets = db.execute("
    INSERT INTO pets (name) VALUES ('#{pet_name}')  
")

p pets