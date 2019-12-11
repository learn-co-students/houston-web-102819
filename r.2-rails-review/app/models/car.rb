class Car < ActiveRecord::Base
    belongs_to(:user)

    def name
        return "#{self.make} #{self.model} (#{self.year})"
    end
end