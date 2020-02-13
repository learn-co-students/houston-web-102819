
exports.up = function(knex) {
  return knex.schema
            .createTable('users', t => {
                t.integer('id')
                t.string('name')
            })
            .createTable('airlines', t => {
                t.integer('id')
                t.string('name')
            })
            .createTable('tickets', t => {
                t.integer('id')
                t.string('destination')
                t.string('seat_number')
                t.float('price')
                t.integer('airline_id')
                t.integer('user_id')
            })
};

exports.down = function(knex) {
  
};
