
# Airline
# Ticket
# Traveler

# User Stories

# tickets
#   id (comes automatically)
#   confirmation_number (we would/could add this later)
#   location
#   seat_number
#   cost
#   passenger_id
#   airline_id

# 1) ~~As a developer I can create tickets~~
# 2) ~~As a user I can lookup tickets by location and airline~~
# 3) ~~As a user I can buy a ticket~~
# 4) ~~As a user I can see the tickets I've purchased~~

require_relative './config/environment.rb'

prompt = TTY::Prompt.new
a = Artii::Base.new :font => 'slant'
ActiveRecord::Base.logger = nil

current_user = Passenger.first

puts "Welcome to:"
puts a.asciify("Flatiron Express")

ticket_locations = Ticket.all.map do | ticket |
    ticket.location
end
users_location = prompt.select("Where do you want to go?", ticket_locations.uniq)

tickets_for_location = Ticket.where({ location: users_location})

ticket_labels = {}
tickets_for_location.each do | ticket |
    ticket_labels["#{ticket.airline.name} Seat: #{ticket.seat_number} ($#{ticket.cost})"] = ticket
end

users_ticket = prompt.select("Which ticket would you like to purchase?", ticket_labels)

users_ticket.update({ passenger: current_user })

puts "Here are your tickets:"
current_user.tickets.each do | ticket |
    puts ticket.location
end

