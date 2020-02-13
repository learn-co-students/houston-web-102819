const Base = require('./Base');

class Ticket extends Base {}

module.exports =  Ticket

const User = require('./User')
const Airline = require('./Airline')
Ticket.belongsTo(User)
Ticket.belongsTo(Airline)

