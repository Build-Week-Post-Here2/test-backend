const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findById,
  //   addIngredient,
  //   findIngredients,
  findPostByUserId,
  update,
  remove,
};

function add(post, id) {
  const addedPost = { ...post, user_id: id };
  return db("posts")
    .insert(addedPost)
    .then(() => {
      return addedPost;
    });
}

function find() {
  return db("posts");
}

function findById(id) {
  return db("posts").where({ id }).first();
}

function findPostByUserId(id) {
  return db("posts as p")
    .select("p.id", "p.name", "p.details")
    .where("p.user_id", id)
    .orderBy("p.id");
}

// function findIngredients(id) {
//   return db("recipe_ingredients as i")
//     .join("recipes as r", "r.id", "i.recipe_id")
//     .select("r.name", "i.recipe_id", "i.quantity")
//     .where(id);
// }

// function addIngredient(ingredient, id) {
//   return db("recipe_ingredients")
//     .insert(ingredient, id)
//     .where("recipe_id", id)
//     .then(() => {
//       return findIngredients(id);
//     });
// }

function update(changes, id) {
  return db("posts").where({ id }).update(changes);
}

function remove(id) {
  return db("posts").where({ id }).del();
}
