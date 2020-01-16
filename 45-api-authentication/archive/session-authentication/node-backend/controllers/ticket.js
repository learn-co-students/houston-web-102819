module.exports = (app, knex) => {

    app.get('/tickets', async (request, response) => {
        let tickets = await  knex('tickets').select()
        response.json(tickets)
    })

    app.post('/tickets', async (request, response) => {
        const { passenger_id, airline_id } = request.body
        const newTicket = { passenger_id, airline_id }

        if(request.currentUser.id == passenger_id){
            let [ id ] = await knex('tickets').insert(newTicket)
            response.json({ ...newTicket, id })
        } else {
            response.json({ error: true, message: 'You cannot buy a ticket for someone else'})
        }
    })

    app.get('/tickets/:id', async (request, response) => {
        const { id } = request.params;
        let [ ticket ] = await knex('tickets').select({ id })
        response.json(ticket)
    })

    app.delete('/tickets/:id', async (request, response) => {
        const { id } = request.params;
        await knex('tickets')
            .where({ id })
            .del()
        response.json(null)
    })

    app.patch('/tickets/:id', async (request, response) => {
        const { id } = request.params;
        const { passenger_id, airline_id } = request.body
        await knex('tickets')
            .where({ id })
            .update({  passenger_id, airline_id })
        let [ ticket ] = await knex('tickets').select({ id })
        response.json(ticket)
    })
    
}