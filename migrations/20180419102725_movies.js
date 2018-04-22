
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments() 
    table.string('title').notNullable().defaultTo('')
    table.string('director').notNullable().defaultTo('')
    table.integer('year').notNullable()
    table.float('rating').notNullable()
    table.string('posterURL').notNullable() 
    table.timestamps(true, true) 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
