'use strict'
module.exports = function(app){
	var movies_controller = require('../controllers/movies.js');
	
	app.route('/movies/popular_movies/')
	.post(movies_controller.popular_movies);
	
	app.route('/movies/top_rated_movies/')
	.post(movies_controller.top_rated_movies);
	
	app.route('/movies/kid_movies/')
	.post(movies_controller.kid_movies);
	
	app.route('/movies/drama_movies/')
	.post(movies_controller.drama_movies);
	
	app.route('/movies/best_movies/')
	.post(movies_controller.best_movies);
	
	app.route('/movies/movie_details/')
	.post(movies_controller.movie_details);
	
	app.route('/movies/now_playing/')
	.post(movies_controller.now_playing);
	
	app.route('/movies/upcoming_movies/')
	.post(movies_controller.upcoming_movies);

	app.route('/movies/countries/')
	.post(movies_controller.countries);
	
}
