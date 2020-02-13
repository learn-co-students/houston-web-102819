const {app, knex} = require('./config')
const User = require('./models/User')
const Ticket = require('./models/Ticket')
const Airline = require('./models/Airline')


app.get('/tickets/available', async (request, response) => {
    let tickets = await Ticket.where({ user_id: null })
                                .innerJoin('airlines', 'tickets.airline_id', 'airlines.id')
                                .select('tickets.*', 'airlines.name as airline_name')
    response.json(tickets)
})

app.get('/tickets/:id', async (request, response) => {
    let ticket = await Ticket.find(request.params.id)
    let airline = await ticket.airline()
    response.json({ ...ticket, airline_name: airline.name  })
})

app.patch('/tickets/:id', async (request, response) => {
    let ticket = await Ticket.find(request.params.id)
    ticket = await ticket.update({
        user_id: request.body.user_id
    })
    response.json(ticket)
})

app.get('/profile', async (request, response) => {
    let user = await User.find(1)
    response.json({ 
        ...user, 
        tickets: (
            await knex('tickets')
                        .where({ user_id: user.id })
                        .innerJoin('airlines', 'tickets.airline_id', 'airlines.id')
                        .select('tickets.*', 'airlines.name as airline_name')
        )
    })
})

app.patch('/profile', async (request, response) => {
    let user = await User.find(1)
    user = await user.update({
        name: request.body.name
    })
    response.json(user)
})

app.listen(3000)