// Sweets-complete
var app = angular.module('mySweet',['ngRoute']);
/*
** Configure the routes
*/
// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

app.config(['$routeProvider',function($routeProvider) {
	 $routeProvider
			.when("/",{
				templateUrl:"partials/home.html",
				controller:'ProductCtrl'
			})
			.when("/specials",{
				templateUrl:"partials/specials.html",
				controller:'ProductCtrl'
			})
			.when("/contact",{
				templateUrl:"partials/contact.html",
				controller:'ProductCtrl'
			})
			.when("/products",{
				templateUrl:"partials/products.html",
				controller:'ProductCtrl'
			})
			.when("/about",{
					templateUrl:"partials/about.html",
					controller:'ProductCtrl'
			});
}]);

app.controller('ProductCtrl',['$scope','$http', function(scope, http){
	console.log("Product Controller reporting for duty.")
	   http.get('data/products.json').success(function(data){
			      scope.products = data;
				  //default to first product
				  scope.selectedProduct = scope.products[0].Fudge;
		 });
		 
	    http.get('data/specials.json').success(function(data){
			
		         scope.specials = data;  
				 console.log(scope.specials);        		  
     	});

}]);
