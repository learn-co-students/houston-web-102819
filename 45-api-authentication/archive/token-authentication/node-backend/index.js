// Configuration
const { compare } = require('bcrypt')
const jwt = require('json-web-token')
const knex = require('knex')(require('./knexfile.js').development)
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())
 
const bodyParser = require('body-parser')
app.use(bodyParser())

// Login Method
app.post('/login', async (req, res ) => {
    const { name, password } = req.body
    const [ user ] = await knex('passengers').where({ name })
    if(await compare(password, user.password_digest)){
        const result = await jwt.encode('asdljasldkfjs', { id: user.id } )
        res.json({ success: true, id: user.id, token: result.value })
    } else {
        res.json({ success: false, id: null })
    }
})

// Middleware to define the currentUser

app.use( async (req, res, next) => {
    try {
        const [ method, token ] = req.headers.authorization.split(' ')
        if(method == 'Bearer'){
            const result = await jwt.decode('asdljasldkfjs', token)
            const { id } = result.value
            let [ user ] = await knex('passengers').where({ id }).select()
            req.currentUser = user
        }
        next()
    } catch(err){
        return res.send({ error: true, message: 'You must be logged in to make this request'})
    }
})

// Register Controllers
require('./controllers/airline')(app, knex)
require('./controllers/passenger')(app, knex)
require('./controllers/ticket')(app, knex)


app.listen(3000)