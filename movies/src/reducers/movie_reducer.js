const init_var = {
	count:0,
	results_data:[],
	page:0,
	movieId:0,
	message:"werwqe",
	countries:[],
	selectedCountry:"US",
	loadingStatus:0,
	currentPage:1,
	selectedMenu:"popular_movies",
	mobileMenu:0,
	movieDetials:[{}]
}
const movieReducer = (state=init_var,action)=>{
	if(action.type==="LATEST_MOVIES"){
		
		const newstate = {...state};
			newstate.count = action.moviesCount;
			newstate.page = action.moviesPages;
			if(action.loadMore){
				newstate.results_data = newstate.results_data.concat(action.moviesResult);
			}else{
				newstate.results_data = action.moviesResult;
			}
			newstate.loadingStatus= action.loading;
			newstate.currentPage= action.current_page;
			newstate.selectedMenu="popular_movies";
		return newstate;
	}
	if(action.type==="TOP_RATED_MOVIES"){
		const newstate = {...state};
			newstate.count = action.moviesCount;
			newstate.page = action.moviesPages;
			if(action.loadMore){
				newstate.results_data = newstate.results_data.concat(action.moviesResult);
			}else{
				newstate.results_data = action.moviesResult;
			}
			newstate.loadingStatus= action.loading;
			newstate.currentPage= action.current_page;
			newstate.selectedMenu="top_rated_movies";
		return newstate;
	}
	if(action.type==="KID_MOVIES"){
		const newstate = {...state};
			newstate.count = action.moviesCount;
			newstate.page = action.moviesPages;
			if(action.loadMore){
				newstate.results_data = newstate.results_data.concat(action.moviesResult);
			}else{
				newstate.results_data = action.moviesResult;
			}
			newstate.loadingStatus= action.loading;
			newstate.currentPage= action.current_page;
			newstate.selectedMenu="kid_movies";
		return newstate;
	}
	if(action.type==="DRAMA_MOVIES"){
		const newstate = {...state};
			newstate.count = action.moviesCount;
			newstate.page = action.moviesPages;
			if(action.loadMore){
				newstate.results_data = newstate.results_data.concat(action.moviesResult);
			}else{
				newstate.results_data = action.moviesResult;
			}
			newstate.loadingStatus= action.loading;
			newstate.currentPage= action.current_page;
			newstate.selectedMenu="drama_movies";
		return newstate;
	}
	if(action.type==="BEST_MOVIES"){
		const newstate = {...state};
			newstate.count = action.moviesCount;
			newstate.page = action.moviesPages;
			if(action.loadMore){
				newstate.results_data = newstate.results_data.concat(action.moviesResult);
			}else{
				newstate.results_data = action.moviesResult;
			}	
			newstate.loadingStatus= action.loading;
			newstate.currentPage= action.current_page;
			newstate.selectedMenu="best_movies";
		return newstate;
	}
	if(action.type==="PLAYING_MOVIES"){
		const newstate = {...state};
			newstate.count = action.moviesCount;
			newstate.page = action.moviesPages;
			if(action.loadMore){
				newstate.results_data = newstate.results_data.concat(action.moviesResult);
			}else{
				newstate.results_data = action.moviesResult;
			}	
			newstate.loadingStatus= action.loading;
			newstate.currentPage= action.current_page;
			newstate.selectedMenu="playing_movies";
		return newstate;
	}
	if(action.type==="UPCOMING_MOVIES"){
		const newstate = {...state};
			newstate.count = action.moviesCount;
			newstate.page = action.moviesPages;
			if(action.loadMore){
				newstate.results_data = newstate.results_data.concat(action.moviesResult);
			}else{
				newstate.results_data = action.moviesResult;
			}	
			newstate.loadingStatus= action.loading;
			newstate.currentPage= action.current_page;
			newstate.selectedMenu="upcoming_movies";
		return newstate;
	}
	if(action.type==="MOVIE_DETAILS"){
		const newstate = {...state};
			newstate.loadingStatus= action.loading;
			newstate.movieDetails= action.movieDetails;
		return newstate;
	}	
	if(action.type==="COUNTRIES"){
		
		const newstate = {...state};
			newstate.countries = action.countriesList;
		return newstate;
	}
	if(action.type==="UPDATE_COUNTRY"){
		
		const newstate = {...state};
			newstate.selectedCountry= action.country;
		return newstate;
	}
	
	if(action.type==="LOADING_STATUS"){
		
		const newstate = {...state};
			newstate.loadingStatus= action.loading;
		return newstate;
	}
	if(action.type==="MOBILE_MENU"){
		
		const newstate = {...state};
			newstate.mobileMenu= action.mobileMenu;
		return newstate;
	}
	return state;
}
export default movieReducer;