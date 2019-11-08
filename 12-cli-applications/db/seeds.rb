Airline.destroy_all
Ticket.destroy_all
Passenger.destroy_all


david = Passenger.create({ name: 'David' })


response = RestClient.get("https://aviation-edge.com/v2/public/airlineDatabase?key=fcffba-1d4753")
airlines = JSON.parse(response.body)

airlines.each do | airline | 
    Airline.create({
        name: airline["nameAirline"],
    })
end


spirit_airline = Airline.create({ name: 'Spirit'})
turkish_airline = Airline.create({ name: 'Turkish Airlines'})
united_airline = Airline.create({ name: 'United' })
southwest_airline = Airline.create({ name: 'Southwest'})

Ticket.create({location: 'Miami', seat_number: 0, cost: 250.75, airline: spirit_airline  })
Ticket.create({ location: 'Miami', seat_number: 1, cost: 450.25, airline: southwest_airline  })
Ticket.create({ location: 'Belgium', seat_number: 2, cost: 450.25, airline: turkish_airline  })
Ticket.create({ location: 'Hawaii', seat_number: 3, cost: 450.25, airline: united_airline  })
Ticket.create({ location: 'Malta', seat_number: 4, cost: 450.25, airline: turkish_airline  })
Ticket.create({ location: 'Galveston', seat_number: 5, cost: 20.25, airline: southwest_airline  })
Ticket.create({ location: 'Sweden', seat_number: 6, cost: 450.25, airline: turkish_airline  })
Ticket.create({ location: 'Japan', seat_number: 7, cost: 450.25, airline: united_airline  })
Ticket.create({ location: 'Spain', seat_number: 8, cost: 450.25, airline: turkish_airline  })