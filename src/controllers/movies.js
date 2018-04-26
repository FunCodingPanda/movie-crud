const model = require('../models/movies')

getAll = (req, res, next) => {
  model.getAll(req.query.all)
    .then((movies, error) => {
      if(error){
        res.status(404).json({
          status: 404, 
          message: `Could not get all the movies`,
          error: error
        })
      } else {
        res.status(200).json({ movies })
      }
    })
}

create = (req, res, next) => {
  const body = req.body
  if (!body.title || !body.director || !body.year || !body.rating || !body.posterURL) {
    res.status(400).json({
      status: 400,
      message: `Title, director, year, rating, and poster URL are all required fields.`
    })
  } else {
    model.create(req.body)
      .then((movies, error) => {
        if(error) {
          res.status(404).json({
            status: 404,
            message: `Can't create this movie`,
            error: error
          })
        } else {
          res.status(201).json({ movie: movies[0] })
        }
      })
  }
}

getById = (req, res, next) => {
  const id = req.params.id
  model.getById(id)
    .then((movies, error) => {
      if(error) {
        return next({
          status: 404,
          message: `Couldn't get movie by id ${id}`,
          error: error
        })
      }
      res.status(200).json({ movies })
    })
}

update = (req, res, next) => {
  const id = req.params.id
  model.update(id, req.body)
    .then((movie, error) => {
      if (error) {
        return next({
          status: 404,
          message: `Could not update movie`,
          errors: error
        })
      }
      res.status(200).json({ movie })
    })
}

deleteById = (req, res, next) => {
  const id = req.params.id
  model.deleteById(id)
    .then((result, error) => {
      if(error) {
        return next({
          status: 404,
          message: `Could not delete movie by id ${id}`,
          error: error
        })
      }
      res.status(204).end()
    })
}

module.exports = {
  getAll,
  create, 
  getById,
  update, 
  deleteById
}
