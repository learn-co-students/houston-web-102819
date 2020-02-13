const Base = require('./Base');

class Airline extends Base {}
module.exports =  Airline

const Ticket = require('./Ticket')
Airline.hasMany(Ticket)
