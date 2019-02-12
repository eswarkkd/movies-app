import React, { Component } from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {loadTopRatedMovies} from '../actions/movies';
import {Link} from 'react-router-dom';


class App extends Component {
	
  render() {

    return (
      <div className="main_div">
		<div className="header"><Header /></div>
		
		<div className="content">
		<div className="content_new">
		<div className="heading_class"><h2>Top Rated Movies</h2></div>
			{(this.props.loading)?<div className="loading_div">Loading</div>:""}
			
			{(this.props.count) ? "Total Records "+this.props.count:"" }<br />
	  
			<div className="row_class">
			{this.props.results_data.map(item=>(
			
			
				<div className="col-3 movie_div" key={item.title} >
				
				<div className="title_class">{item.title}</div>
				
			
				<div className="image_div">
					<Link to={"../movie_details/"+item.id}><img src={'http://image.tmdb.org/t/p/w154/'+item.poster_path} /></Link>
				</div>
				<div className="title_class">Vote : {item.vote_average}</div>
				<div className="vote_count">Vote Count : {item.vote_count}</div>
				</div>
			
			
			))}
			</div>
			</div>
			
			{(this.props.page>0) ? <div className="loadmore_class"><input type="button" value="Load More ... " onClick={()=>{this.props.topRatedMovies(1)}} /></div> : ""}
			
			
			
		</div>
      </div>
    );
  }
	componentDidMount(){
		this.props.topRatedMovies(0);
	}

}
const mapStatetoProps = (state) =>{
	return ({
	count:state.movieReducer.count,
	results_data:state.movieReducer.results_data,
	page:state.movieReducer.page,
	loading:state.movieReducer.loadingStatus});
}
const mapDispatchtoProps = (dispatch)=>{
	return{
		topRatedMovies:(loadmore_value)=>{loadTopRatedMovies(dispatch,loadmore_value)},
	};
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
