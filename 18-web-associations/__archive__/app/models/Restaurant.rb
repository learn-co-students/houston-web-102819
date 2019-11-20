class Restaurant < ActiveRecord::Base
    has_many(:receipts)
end