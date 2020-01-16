# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#

Ticket.destroy_all
Airline.destroy_all
Passenger.destroy_all

chases = [
    { name: 'ChaseWhatMattrs', password: 'chase' },
    { name: 'ChaseYourTail', password: 'chase' },
    { name: '2Chase2Furious', password: 'chase' },
    { name: 'ChaseYourDreams', password: 'chase' },
    { name: 'PoliceChase', password: 'chase' },
    { name: 'StopChasing', password: 'chase' },
    { name: 'CyberChase', password: 'chase' },
    { name: 'IsReallyChase', password: 'chase' },
    { name: 'ThisIsntChase', password: 'chase' },
]

chases.each do | chase |
    Passenger.create(chase)
end

airlines = [
    { name: 'United' },
    { name: 'Spirit' },
    { name: 'Southwest' },
]

airlines.each do | airline |
    Airline.create(airline)
end