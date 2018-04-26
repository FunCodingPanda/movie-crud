const knex = require('./db')

getAll = () => {
  return knex('movies')
}

create = (body) => {
  return knex('movies').insert({
    title: body.title,
    director: body.director,
    year: body.year,
    rating: body.rating,
    posterURL: body.posterURL
  })
}

getById = (id) => {
  const movies = knex('movies').where('id', id)
  if (!movies) {
    response = {
      status: 404, 
      message: `Movies Id is not found`
    }
    return response;
  } else {
    return movies;
  }
}

update = (id, body) => {
  return knex('movies')
    .where('id', id)
    .update({
      title: body.title,
      director: body.director,
      year: body.year,
      rating: body.rating,
      posterURL: body.posterURL
    })
    .returning('*') // return the objects(everything about that particular object) after updating
}

deleteById = (id) => {
  return knex('movies')
  .where('id', id)
  .delete()
}

module.exports = {
  getAll,
  create, 
  getById,
  update, 
  deleteById
}