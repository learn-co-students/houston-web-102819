const Base = require('./Base');

class User extends Base {}
module.exports =  User

const Ticket = require('./Ticket')
User.hasMany(Ticket)