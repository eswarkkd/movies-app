import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadLatestMovies,loadCountries,updateCountry,animateMenu} from '../actions/movies'
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png'
import {Select,SelectItem} from 'carbon-components-react';


class App extends Component {
	
  render() {

    return (
    
		<div className="header_new">
		<div className="header_bg_new">
			<div className="row_class">
				<div className="col-2 center_class"><img src={Logo} /></div>
				<div className="col-2 center_class">
				<Select className="countries_selectbox" defaultValue="US" name="countries">
				{this.props.countries.map(item=>(<SelectItem value={item.iso_3166_1} text={item.english_name}></SelectItem>))}
				</Select>
				{/*Select Country <select className="selectbox" name="countries" value={this.props.selectedCountry} onChange={this.selectCountry.bind(this)}>
	{this.props.countries.map(item=>(<option value={item.iso_3166_1} key={item.iso_3166_1}>{item.english_name}</option>))}
				</select>*/}
				</div>
				<div className="mobile_menu_icon" onClick={()=>(this.props.AnimateMenu(this.props.mobileMenu))}>Menu</div>
				
			</div>
			<div className="menu">
			<ul>
				<li className={(this.props.selectedMenu==="popular_movies")?"selected_menu":""}><Link to="/popular_movies">Popular Movies</Link></li>
				<li className={(this.props.selectedMenu==="top_rated_movies")?"selected_menu":""}><Link to="/top_rated_movies" >Top Rated Movies</Link></li>
				<li className={(this.props.selectedMenu==="kid_movies")?"selected_menu":""}><Link to="/kid_movies">Kid Movies</Link></li>
				<li className={(this.props.selectedMenu==="drama_movies")?"selected_menu":""}><Link to="/drama_movies">Drama Movies</Link></li>
				<li className={(this.props.selectedMenu==="best_movies")?"selected_menu":""}><Link to="/best_movies">Best Movies 2018</Link></li>
				<li className={(this.props.selectedMenu==="playing_movies")?"selected_menu":""}><Link to="/playing_movies">Playing Moives</Link></li>
				<li className={(this.props.selectedMenu==="upcoming_movies")?"selected_menu":""}><Link to="/upcoming_movies">Upcoming Movies</Link></li>
			</ul>
		</div>
		<div className={(this.props.mobileMenu)?'mobile_menu mobile_menu_stop':'mobile_menu'}>
			<ul>
				<li className={(this.props.selectedMenu==="popular_movies")?"selected_menu":""}><Link to="/popular_movies">Popular Movies</Link></li>
				<li className={(this.props.selectedMenu==="top_rated_movies")?"selected_menu":""}><Link to="/top_rated_movies" >Top Rated Movies</Link></li>
				<li className={(this.props.selectedMenu==="kid_movies")?"selected_menu":""}><Link to="/kid_movies">Kid Movies</Link></li>
				<li className={(this.props.selectedMenu==="drama_movies")?"selected_menu":""}><Link to="/drama_movies">Drama Movies</Link></li>
				<li className={(this.props.selectedMenu==="best_movies")?"selected_menu":""}><Link to="/best_movies">Best Movies 2018</Link></li>
				<li className={(this.props.selectedMenu==="playing_movies")?"selected_menu":""}><Link to="/playing_movies">Playing Moives</Link></li>
				<li className={(this.props.selectedMenu==="upcoming_movies")?"selected_menu":""}><Link to="/upcoming_movies">Upcoming Movies</Link></li>
			</ul>
		</div>
		</div>
		</div>
    );
  } 
	selectCountry(e){
		  this.props.updateCountryAction(e.target.value);
	}
	componentWillMount(){
	this.props.loadCountriesList();
	}

}
const mapStatetoProps = (state) =>{
	return ({
		count:state.movieReducer.count,
		results_data:state.movieReducer.results_data,
		page:state.movieReducer.page,
		countries:state.movieReducer.countries,
		selectedCountry:state.movieReducer.selectedCountry,
		selectedMenu:state.movieReducer.selectedMenu,
		mobileMenu:state.movieReducer.mobileMenu
		});
}
const mapDispatchtoProps = (dispatch)=>{
	return{
		updateCountryAction:(countryId)=>{updateCountry(dispatch,countryId)},
		AnimateMenu:(mobileMenuValue)=>{animateMenu(dispatch,mobileMenuValue)},
		loadCountriesList:()=>{loadCountries(dispatch)},
		latestMovies:()=>{loadLatestMovies(dispatch)},
		topRatedMovies:()=>{dispatch(loadLatestMovies())},
		kidMovies:()=>{dispatch(loadLatestMovies())},
	};
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
