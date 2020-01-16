
exports.up = function(knex) {
    return knex.schema.createTable('airlines', function (table) {
        table.increments();
        table.string('name');
        table.integer('established');
    })
    .createTable('tickets', function (table) {
      table.increments();
      table.integer('passenger_id');
      table.integer('airline_id');
  })
  .createTable('passengers', function (table) {
      table.increments();
      table.string('name');
      table.integer('password_digest');
  })
};

exports.down = function(knex) {
  return knex.schema
            .dropTable('tickets')
            .dropTable('airlines')
            .dropTable('passengers')
};
