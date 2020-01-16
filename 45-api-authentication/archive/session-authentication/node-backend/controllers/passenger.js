
module.exports = (app, knex) => {

    app.get('/passengers', async (request, response) => {
        let passengers = await  knex('passengers').select()
        response.json(passengers)
    })

    app.post('/passengers', async (request, response) => {
        const { name } = request.body
        const newPassenger = { name }
        await knex('passengers').insert(newPassenger)
        response.json(newPassenger)
    })

    app.get('/passengers/:id', async (request, response) => {
        const { id } = request.params;
        let [ passenger ] = await knex('passengers').where({ id }).select()
        let tickets = await knex('tickets').where({ passenger_id: id }).select()
        response.json({ ...passenger, tickets })
    })

    app.delete('/passengers/:id', async (request, response) => {
        const { id } = request.params;
        await knex('passengers')
            .where({ id })
            .del()
        response.json(null)
    })

    app.patch('/passengers/:id', async (request, response) => {
        const { id } = request.params;
        const { name } = request.body
        await knex('passengers')
            .where({ id })
            .update({  name })
        let [ passenger ] = await knex('passengers').select({ id })
        response.json(passenger)
    })
    
}