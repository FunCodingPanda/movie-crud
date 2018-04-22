exports.seed = function(knex, Promise) {
  return Promise.resolve()
    .then(() => knex('movies').del())
    .then(() => knex('movies').insert(
      [
        {title: 'FightClub', director: 'David Fincher', year:1999, rating:4.4, posterURL:"https://www.barakashop.co.za/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/fight_club_poster.jpg"},
        {title: 'Avatar', director: 'James Cameron', year: 2009, rating:3.6, posterURL:"https://i.pinimg.com/originals/c3/2e/40/c32e40b633ff92a2d3048f5ce8570c90.jpg"},
        {title: 'Get Out', director: 'Jordan Peel', year: 2017, rating: 3.55, posterURL: "http://img.moviepostershop.com/get-out-movie-poster-2017-1020777214.jpg"}
      ]))
}