
exports.seed = async function(knex) {
  await knex('tickets').del()
  await knex('users').del()
  await knex('airlines').del()

  await knex('airlines').insert([
    {id: 1, name: 'Spirit'},
    {id: 2, name: 'Southwest'},
  ]);

  await knex('users').insert([
    {id: 1, name: 'Mubarak'},
  ]);

  await knex('tickets').insert([
    {
      id: 1,
      destination: 'Paris',
      seat_number: 'A1',
      price: 5000,
      airline_id: 2, 
      user_id: 1 
    },
    {
      id: 2,
      destination: 'Dallas',
      seat_number: 'B1',
      price: 75,
      airline_id: 1, 
      user_id: null 
    },
    {
      id: 3,
      destination: 'New York City',
      seat_number: 'C4',
      price: 200,
      airline_id: 2, 
      user_id: null 
    },
    {
      id: 4,
      destination: 'Ontario Canada',
      seat_number: 'A1',
      price: 300,
      airline_id: 1, 
      user_id: null 
    }
  ]);
};
