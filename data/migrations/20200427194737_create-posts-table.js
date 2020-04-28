exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 48).notNullable().unique();
      tbl.string("password", 48).notNullable();
      tbl.string("email", 48).notNullable();
    })
    .createTable("posts", (tbl) => {
      tbl.increments();
      tbl.string("title", 255).notNullable();
      tbl.text("body");
      tbl
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("posts");
};
