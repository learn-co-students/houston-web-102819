class Character < ApplicationRecord
    has_many(:items)

    def label
        "#{name} (#{x}, #{y})"
    end

end