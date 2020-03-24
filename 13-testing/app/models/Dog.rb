class Dog < ActiveRecord::Base

    # requires foreign key: owner_id
    belongs_to(:owner)
    belongs_to(:breed)

    # def owner
    #     return Owner.where({ id: self.owner_id })[0]
    # end

end