
class Owner < ActiveRecord::Base
    has_many(:pets)


    def name
        return "#{self.first_name} #{self.last_name}"
    end

end

