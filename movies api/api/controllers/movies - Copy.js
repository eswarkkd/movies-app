var axios = require('axios');

exports.popular_movies = function(req,res){
	axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3b650e38d9522f397218b352ef81afcd&language=en-'+req.body.language+'&page='+req.body.page+'')
	.then(response => {
	res.send(response.data); 
	})
}

exports.top_rated_movies = function(req,res){
	axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=3b650e38d9522f397218b352ef81afcd&language=en-'+req.body.language+'&page='+req.body.page+'')
	.then(response => { res.send(response.data); })
}

exports.kid_movies = function(req,res){
	axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3b650e38d9522f397218b352ef81afcd&language=en-'+req.body.language+'&page='+req.body.page+'&certification.lte=G&sort_by=popularity.desc')
	.then(response => { res.send(response.data); })
}

exports.drama_movies = function(req,res){
	axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3b650e38d9522f397218b352ef81afcd&language=en-'+req.body.language+'&page='+req.body.page+'&vote_count.gte=10&with_genres=18&sort_by=vote_average.desc')
	.then(response => { res.send(response.data); })
}

exports.best_movies = function(req,res){
	axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3b650e38d9522f397218b352ef81afcd&language=en-'+req.body.language+'&page='+req.body.page+'&primary_release_year='+req.body.primary_release_year+'&sort_by='+req.body.sort_by+'')
	.then(response => { res.send(response.data); })
}

exports.movie_details = function(req,res){
	axios.get('https://api.themoviedb.org/3/movie/'+req.body.movie_id+'?api_key=3b650e38d9522f397218b352ef81afcd&language=en-'+req.body.language+'')
	.then(response => { res.send(response.data); })
}

exports.now_playing = function(req,res){
	axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3b650e38d9522f397218b352ef81afcd&language=en-'+req.body.language+'&page='+req.body.page+'')
	.then(response => { res.send(response.data); })
}

exports.upcoming_movies = function(req,res){
	axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=3b650e38d9522f397218b352ef81afcd&language=en-'+req.body.language+'&page='+req.body.page+'')
	.then(response => { res.send(response.data); })
}

exports.countries = function(req,res){
	axios.get('https://api.themoviedb.org/3/configuration/countries?api_key=3b650e38d9522f397218b352ef81afcd')
	.then(response => { res.send(response.data); })
}




