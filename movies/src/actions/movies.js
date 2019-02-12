 import store from '../store';
 export function loadingStatus(dispatch){
	 return dispatch({type:"LOADING_STATUS",loading:1});
 }
 export function loadMore(dispatch){
	 //alert("load more");
 }

 export function loadLatestMovies(dispatch,loadmore){
	 const userSelectedCountry = store.getState().movieReducer.selectedCountry;
	 var correntPage_value = store.getState().movieReducer.currentPage;
	 
	 if(loadmore===1){
		 correntPage_value+=parseInt(correntPage_value);
	 }else{
		 correntPage_value=1;
	 }
	 
	 
	 // updading loading
	  loadingStatus(dispatch);
	  animateMenu(dispatch,1);
	  
	 fetch('http://localhost:3001/movies/popular_movies/',
	 {
		method:'post',
		headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
		body:"language="+userSelectedCountry+"&page="+correntPage_value+""
	 })
	 .then(response => {return response.json()})
	 .then(data => {
		 return dispatch({type:"LATEST_MOVIES",moviesCount:data.total_results,moviesResult:data.results,moviesPages:data.total_pages,loading:0,current_page:data.page,loadMore:loadmore,mobileMenu:0});
	 })
 }
 
  export function loadKidMovies(dispatch,loadmore){
	 const userSelectedCountry = store.getState().movieReducer.selectedCountry;
	 var correntPage_value = store.getState().movieReducer.currentPage;
	 
	 if(loadmore===1){
		 correntPage_value+=parseInt(correntPage_value);
	 }else{
		 correntPage_value=1;
	 }
	 
	 
	 // updading loading
	  loadingStatus(dispatch);
	  animateMenu(dispatch,1);
	  
	 fetch('http://localhost:3001/movies/kid_movies/',
	 {
		method:'post',
		headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
		body:"language="+userSelectedCountry+"&page="+correntPage_value+""
	 })
	 .then(response => {return response.json()})
	 .then(data => {
		 return dispatch({type:"KID_MOVIES",moviesCount:data.total_results,moviesResult:data.results,moviesPages:data.total_pages,loading:0,current_page:data.page,loadMore:loadmore,mobileMenu:0});
	 })
 }
	
 export function loadDramaMovies(dispatch,loadmore){
	 const userSelectedCountry = store.getState().movieReducer.selectedCountry;
	 var correntPage_value = store.getState().movieReducer.currentPage;
	 
	 if(loadmore===1){
		 correntPage_value+=parseInt(correntPage_value);
	 }else{
		 correntPage_value=1;
	 }
	 
	 
	 // updading loading
	  loadingStatus(dispatch);
	  animateMenu(dispatch,1);
	  
	 fetch('http://localhost:3001/movies/drama_movies/',
	 {
		method:'post',
		headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
		body:"language="+userSelectedCountry+"&page="+correntPage_value+""
	 })
	 .then(response => {return response.json()})
	 .then(data => {
		 return dispatch({type:"DRAMA_MOVIES",moviesCount:data.total_results,moviesResult:data.results,moviesPages:data.total_pages,loading:0,current_page:data.page,loadMore:loadmore,mobileMenu:0});
	 })
 }

 export function loadBestMovies(dispatch,loadmore){
	 const userSelectedCountry = store.getState().movieReducer.selectedCountry;
	 var correntPage_value = store.getState().movieReducer.currentPage;
	 
	 if(loadmore==1){
		 correntPage_value+=parseInt(correntPage_value);
	 }else{
		 correntPage_value=1;
	 }
	 
	 
	 // updading loading
	  loadingStatus(dispatch);
	  animateMenu(dispatch,1);
	  
	 fetch('http://localhost:3001/movies/best_movies/',
	 {
		method:'post',
		headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
		body:"language="+userSelectedCountry+"&page="+correntPage_value+""
	 })
	 .then(response => {return response.json()})
	 .then(data => {
		 return dispatch({type:"BEST_MOVIES",moviesCount:data.total_results,moviesResult:data.results,moviesPages:data.total_pages,loading:0,current_page:data.page,loadMore:loadmore,mobileMenu:0});
	 })
 }
 export function loadPlayingMovies(dispatch,loadmore){
	 const userSelectedCountry = store.getState().movieReducer.selectedCountry;
	 var correntPage_value = store.getState().movieReducer.currentPage;
	 
	 if(loadmore==1){
		 correntPage_value+=parseInt(correntPage_value);
	 }else{
		 correntPage_value=1;
	 }
	 
	 
	 // updading loading
	  loadingStatus(dispatch);
	  animateMenu(dispatch,1);
	  
	 fetch('http://localhost:3001/movies/now_playing/',
	 {
		method:'post',
		headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
		body:"language="+userSelectedCountry+"&page="+correntPage_value+""
	 })
	 .then(response => {return response.json()})
	 .then(data => {
		 return dispatch({type:"PLAYING_MOVIES",moviesCount:data.total_results,moviesResult:data.results,moviesPages:data.total_pages,loading:0,current_page:data.page,loadMore:loadmore,mobileMenu:0});
	 })
 }

 export function loadUpcomingMovies(dispatch,loadmore){
	 const userSelectedCountry = store.getState().movieReducer.selectedCountry;
	 var correntPage_value = store.getState().movieReducer.currentPage;
	 
	 if(loadmore==1){
		 correntPage_value+=parseInt(correntPage_value);
	 }else{
		 correntPage_value=1;
	 }
	 
	 
	 // updading loading
	  loadingStatus(dispatch);
	  animateMenu(dispatch,1);
	  
	 fetch('http://localhost:3001/movies/upcoming_movies/',
	 {
		method:'post',
		headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
		body:"language="+userSelectedCountry+"&page="+correntPage_value+""
	 })
	 .then(response => {return response.json()})
	 .then(data => {
		 return dispatch({type:"UPCOMING_MOVIES",moviesCount:data.total_results,moviesResult:data.results,moviesPages:data.total_pages,loading:0,current_page:data.page,loadMore:loadmore,mobileMenu:0});
	 })
 }
 
 export function loadTopRatedMovies(dispatch,loadmore){
	 const userSelectedCountry = store.getState().movieReducer.selectedCountry;
	 var correntPage_value = store.getState().movieReducer.currentPage;
	 
	 if(loadmore==1){
		 correntPage_value+=parseInt(correntPage_value);
	 }else{
		 correntPage_value=1;
	 }
	 
	 
	 // updading loading
	  loadingStatus(dispatch);
	animateMenu(dispatch,1);
	  
	 fetch('http://localhost:3001/movies/top_rated_movies/',
	 {
		method:'post',
		headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
		body:"language="+userSelectedCountry+"&page="+correntPage_value+""
	 })
	 
	 .then(response => {return response.json()})
	 .then(data => {
		 return dispatch({type:"TOP_RATED_MOVIES",moviesCount:data.total_results,moviesResult:data.results,moviesPages:data.total_pages,loading:0,current_page:data.page,loadMore:loadmore,mobileMenu:0});
	 })
 }
 
 export function loadMovieDetails(dispatch,movieId){
 
	 // updading loading
	  loadingStatus(dispatch);
	  
	 fetch('http://localhost:3001/movies/movie_details/',
	 {
		method:'post',
		headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
		body:"movie_id="+movieId+""
	 })
	 
	 .then(response => {return response.json()})
	 .then(data => {
		 return dispatch({type:"MOVIE_DETAILS",loading:0,movieDetails:data});
	 })
 }
 
 
 export function loadCountries(dispatch){
	 fetch('https://api.themoviedb.org/3/configuration/countries?api_key=3b650e38d9522f397218b352ef81afcd')
	.then(response => {return response.json()})
	.then(data =>{
		return dispatch({type:'COUNTRIES',countriesList:data});
	})
 }
 
 
 export function updateCountry(dispatch,countryId){
	 return dispatch({type:'UPDATE_COUNTRY',country:countryId});
 }
 export function animateMenu(dispatch,mobileMenuValue){
		if(mobileMenuValue){
			return dispatch({type:'MOBILE_MENU',mobileMenu:0});
		}else{
			return dispatch({type:'MOBILE_MENU',mobileMenu:1});		
		}
	 
 }