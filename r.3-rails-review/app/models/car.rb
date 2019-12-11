class Car < ActiveRecord::Base
    belongs_to(:owner)

    def name
        return "#{self.color} #{self.brand} #{self.model}"
    end

end