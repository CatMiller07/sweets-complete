// Sweets-complete
var app = angular.module('mySweet',['ngRoute']);
/*
** Configure the routes
*/
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
			.when("/about",{
					templateUrl:"partials/about.html",
					controller:'ProductCtrl'
			});
}]);

app.controller('ProductCtrl',['$scope','$http', function(scope, http){
	console.log("Product Controller reporting for duty.")
	   http.get('data/products.json').success(function(data){
			      scope.products = data;
		 });
		 http.get('data/specials.json').success(function(data){
					 scope.specials = data;

		});

}]);
