const { hash } = require('bcrypt')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tickets').del()
  await knex('passengers').del()
  await knex('airlines').del()
  
  await knex('passengers').insert([
    { name: 'ChaseWhatMattrs', password_digest: await hash('chase', 10) },
    { name: 'ChaseYourTail', password_digest: await hash('chase', 10) },
    { name: '2Chase2Furious', password_digest: await hash('chase', 10) },
    { name: 'ChaseYourDreams', password_digest: await hash('chase', 10) },
    { name: 'PoliceChase', password_digest: await hash('chase', 10) },
    { name: 'StopChasing', password_digest: await hash('chase', 10) },
    { name: 'CyberChase', password_digest: await hash('chase', 10) },
    { name: 'IsReallyChase', password_digest: await hash('chase', 10) },
    { name: 'ThisIsntChase', password_digest: await hash('chase', 10) },
  ]);

  
  await knex('airlines').insert([
    { name: 'United' },
    { name: 'Spirit' },
    { name: 'Southwest' },
  ]);
};
