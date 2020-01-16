class Ticket < ActiveRecord::Base
    belongs_to(:passenger)
end