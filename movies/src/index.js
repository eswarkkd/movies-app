import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopRatedMovies from './components/top_rated_movies';
import popularMovies from './components/popular_movies';
import movieDetails from './components/movie_details';
import kidMovies from './components/kid_movies';
import dramaMovies from './components/drama_movies';
import bestMovies from './components/best_movies';
import playingMovies from './components/playing_movies';
import upcomingMovies from './components/upcoming_movies';

import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store/';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './styles.css';

ReactDOM.render(<Provider store={store}>
<Router>
<div>
	<Route exact path="/" component={App} />
	<Route path="/popular_movies" component={popularMovies} />
	<Route path="/top_rated_movies" component={TopRatedMovies} />
	<Route path="/kid_movies" component={kidMovies} />
	<Route path="/drama_movies" component={dramaMovies} />
	<Route path="/best_movies" component={bestMovies} />
	<Route path="/playing_movies" component={playingMovies} />
	<Route path="/upcoming_movies" component={upcomingMovies} />
	<Route path="/movie_details/:movieid/" component={movieDetails} />
</div>
</Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
