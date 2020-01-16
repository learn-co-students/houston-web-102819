module.exports = (app, knex) => {

    app.get('/airlines', async (request, response) => {
        let airlines = await  knex('airlines').select()
        response.json(airlines)
    })

    app.post('/airlines', async (request, response) => {
        const { name, established } = request.body
        const newAirline = { name, established }
        await knex('airlines').insert(newAirline)
        response.json(newAirline)
    })

    app.get('/airlines/:id', async (request, response) => {
        const { id } = request.params;
        let [ airline ] = await knex('airlines').select({ id })
        response.json(airline)
    })

    app.delete('/airlines/:id', async (request, response) => {
        const { id } = request.params;
        await knex('airlines')
            .where({ id })
            .del()
        response.json(null)
    })

    app.patch('/airlines/:id', async (request, response) => {
        const { id } = request.params;
        const { name, established } = request.body
        await knex('airlines')
            .where({ id })
            .update({  name, established })
        let [ airline ] = await knex('airlines').select({ id })
        response.json(airline)
    })
    
}