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
        profile: User
        availableTickets: [ Ticket ]
        getTicket(id: Int): Ticket
    }

    type Mutation {
        updateProfile(name: String): User
        purchaseTicket(id: Int, user_id: Int): Ticket
    }
`;

const resolvers = {
    Query: {
        profile: async () => {
            return User.find(1)
        },
        availableTickets: async () => {
            let tickets = await Ticket.where({ user_id: null })
            return tickets
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