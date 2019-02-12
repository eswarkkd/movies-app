import React, { Component } from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {loadMovieDetails} from '../actions/movies'
import {Link} from 'react-router-dom';


class App extends Component {
	
  render() {

    return (
      <div className="main_div">
		<div className="header"><Header /></div>
		
		<div className="content">
		<div className="content_new">
		<div className="heading_class"><h2>Movie Details</h2></div>
			{(this.props.loading)?<div className="loading_div">Loading</div>:""}
	  
			<div className="row_class">
			movie details info {this.props.match.params.movieid}<br />
			{/*this.props.movieDetailsObject.map(item=>{item.id})*/}
			movie info{console.log(this.props.movieDetailsObject)}
			<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			</div>
			</div>
			
						
			
			
		</div>
      </div>
    );
  }
	componentDidMount(){
		this.props.movieDetails(this.props.match.params.movieid);
	}

}
const mapStatetoProps = (state) =>{
	return ({
	movieDetailsObject:state.movieReducer.movieDetails,
	});
}
const mapDispatchtoProps = (dispatch)=>{
	return{
		movieDetails:(movieId)=>{loadMovieDetails(dispatch,movieId)}
	};
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
