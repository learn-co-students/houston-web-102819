class Pet < ActiveRecord::Base

    belongs_to(:owner)
    belongs_to(:breed)

    # def owner
    #     return Owner.find_by({ id: self.owner_id })
    # end

    # belongs_to
    # has_many
    # create methods for you
    #   to access related objects

end

# Owner -< Pet >- Breed

# Owner
#   -id

# Pet
#   - owner_id
#   - breed_id

# Breed
#   -id
