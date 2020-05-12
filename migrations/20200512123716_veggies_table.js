exports.up = function(knex) {
	return knex.schema.createTable('veggies', (tbl) => {
		tbl.increments();
		tbl.string('name', 255).notNullable().unique();
		tbl.boolean('tasty');

		tbl.timestamp(true, true);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableExists('veggies');
};
