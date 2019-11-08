class Breed < ActiveRecord::Base

    has_many(:pets)
    has_many(:owners, { through: :pets })

end