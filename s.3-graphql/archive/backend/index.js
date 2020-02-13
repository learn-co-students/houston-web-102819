const { app, knex } = require('./config')
const User = require('./models/User')
const Ticket = require('./models/Ticket')
const Airline = require('./models/Airline')
const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`

    type User {
        id: Int
        name: String
        tickets: [ Ticket ]
    }

    type Airline {
        id: Int
        name: String
        tickets: [ Ticket ]
    }

    type Ticket {
        id: Int
        destination: String
        seat_number: String
        price: String
        user: User
        airline: Airline
    }

    type Query {
        availableTickets: [ Ticket ]
        profile: User
        getTicket(id: Int): Ticket
    }

    type Mutation {
        updateProfile(name: String): User
        purchaseTicket(id: Int, user_id: Int): Ticket
    }
`;


const resolvers = {
    Query: {
        availableTickets: async () => {
            let tickets = await Ticket.where({ user_id: null })
            return tickets
        },
        profile: async () => {
            let user = await User.find(1)
            return user
        },
        getTicket: async (parent, { id }) => {
            let ticket = await Ticket.find(id)
            let airline = await ticket.airline()
            return { ...ticket, airline  }
        }
    },
    Mutation: {
        purchaseTicket: async (parent, { id, user_id }) => {
            let ticket = await Ticket.find(id)
            ticket = await ticket.update({
                user_id: user_id
            })
            return ticket
        },
        updateProfile: async (parent, { name }) => {
            let user = await User.find(1)
            user = await user.update({
                name: name
            })
            return user
        }
    }
};


const server = new ApolloServer({ typeDefs, resolvers });
server.listen(3000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});



// app.get('/tickets/available', async (request, response) => {
//     let tickets = await Ticket.where({ user_id: null })
//                                 .innerJoin('airlines', 'tickets.airline_id', 'airlines.id')
//                                 .select('tickets.*', 'airlines.name as airline_name')
//     response.json(tickets)
// })

// app.get('/tickets/:id', async (request, response) => {
//     let ticket = await Ticket.find(request.params.id)
//     let airline = await ticket.airline()
//     response.json({ ...ticket, airline_name: airline.name  })
// })

// app.patch('/tickets/:id', async (request, response) => {
//     let ticket = await Ticket.find(request.params.id)
//     ticket = await ticket.update({
//         user_id: request.body.user_id
//     })
//     response.json(ticket)
// })

// app.get('/profile', async (request, response) => {
//     let user = await User.find(1)
//     response.json({ 
//         ...user, 
//         tickets: (
//             await knex('tickets')
//                         .where({ user_id: user.id })
//                         .innerJoin('airlines', 'tickets.airline_id', 'airlines.id')
//                         .select('tickets.*', 'airlines.name as airline_name')
//         )
//     })
// })

// app.patch('/profile', async (request, response) => {
//     let user = await User.find(1)
//     user = await user.update({
//         name: request.body.name
//     })
//     response.json(user)
// })

// app.listen(3000)
