// Configuration
const { compare } = require('bcrypt')
const knex = require('knex')(require('./knexfile.js').development)
const express = require('express')

const app = express()

const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}))

const bodyParser = require('body-parser')
app.use(bodyParser())

// Configure the cookie Session
const cookieSession = require('cookie-session')
app.use(cookieSession({
    name: 'session',
    keys: [ 'asdljasldkfjs' ],
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// Login Method
app.post('/login', async (req, res) => {
    const { name, password } = req.body
    const [user] = await knex('passengers').where({ name })
    if (await compare(password, user.password_digest)) {
        req.session.userId = user.id
        res.json({ success: true, id: user.id })
    } else {
        res.json({ success: false, id: null })
    }
})

app.use( async (req, res, next) => {
    try {
        const { userId } = req.session
        let [ user ] = await knex('passengers').where({ id: userId }).select()
        req.currentUser = user
        next()
    } catch (err){
        res.json({ message: 'You must be logged in to make this request'})
    }
})

// Register Controllers
require('./controllers/airline')(app, knex)
require('./controllers/passenger')(app, knex)
require('./controllers/ticket')(app, knex)


app.listen(3000)