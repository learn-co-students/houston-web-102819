class Owner < ActiveRecord::Base

    has_many(:pets)
    has_many(:breeds, { through: :pets })

end