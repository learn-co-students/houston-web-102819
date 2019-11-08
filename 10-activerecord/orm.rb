require 'sqlite3'

# Model- A class which represents a table

# ActiveRecord 
#   - translates ruby code into sql code
#       (at runtime)
#   migrations
#       create and maintain tables
#   models
#       create and maintain table rows

class Pet 

    attr_accessor(:name)

    def initialize(attributes)
        @name = attributes["name"]
    end

    def self.all
        db = SQLite3::Database.new('pets.db')
        db.results_as_hash = true
        pet_hashes = db.execute('
            SELECT * FROM pets;
        ')

        return pet_hashes.map do | pet_hash |
            Pet.new(pet_hash)
        end
    end

end

p Pet.all