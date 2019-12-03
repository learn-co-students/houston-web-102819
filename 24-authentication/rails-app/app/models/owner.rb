
class Owner < ActiveRecord::Base
    has_many(:pets)

    has_secure_password

end


# Authentication
#   * Making sure who you are

# Authorization
#   * Giving permission to perform
#       a specific action

# 1) Take in the users password "Twinsen34"
# 2) Hash it "md54oijso"
# 3) Store that in the database
# 4) User logs in with "Twinsen34"
# 5) Hash the user input
# 6) And compare the two hashes

# Hashing
#   * Transforms a string in 
#       one direction


# Encryption
#   * Transforms a string in a 
#       reversable way
# abcd -> dcba

# Both:
# Transform strings