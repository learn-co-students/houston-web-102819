class Traveler < ApplicationRecord
    has_many(:tickets)
    has_many(:airlines, { through: :tickets })
end
