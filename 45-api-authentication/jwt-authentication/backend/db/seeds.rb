Ticket.destroy_all()
User.destroy_all()
Airline.destroy_all()


spirit = Airline.create({ name: 'Spirit' })

southwest = Airline.create({ name: 'Southwest' })

mubarak = User.create({ username: 'Mubarak', password: 'password' })

Ticket.create({ 
    destination: 'Paris',
    seat_number: 'A1',
    price: 5000,
    airline: southwest, 
    user: mubarak 
})

Ticket.create({ 
    destination: 'Dallas',
    seat_number: 'B1',
    price: 75,
    airline: spirit, 
    user: nil 
})

Ticket.create({ 
    destination: 'New York City',
    seat_number: 'C4',
    price: 200,
    airline: southwest, 
    user: nil 
})

Ticket.create({ 
    destination: 'Ontario Canada',
    seat_number: 'A1',
    price: 300,
    airline: spirit, 
    user: nil 
})