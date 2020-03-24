
[
    "United",
    'Southwest',
    'Spirit'
].each do | name |
     Airline.create(name: name)
end

[
    "Roy",
    'Kurtis',
    'Marrio',
    'Feven',
    'Jason'
].each do | name |
    # Same as: Traveler.create(name: name)
    traveler = Traveler.new(name: name)
    traveler.save

    3.times do 
        Ticket.create(traveler_id: traveler.id, airline_id: Airline.all.sample.id)
    end
end