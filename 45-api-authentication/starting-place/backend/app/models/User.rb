class User < ApplicationRecord 
    has_many(:tickets)
    has_many(:airlines, {through: :tickets})

    has_secure_password
end