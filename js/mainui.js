// Sweets-complete
var app = angular.module('mySweet',['ui.router']);

app.config(['$stateProvider','$urlProvider', function($stateProvider, $urlProvider) {
	  $urlRouteProvider.otherwise('/');

	  $stateProvider
	       .state('home', {
			         url:'/',
			     templateUrl: 'partials/home.html',
				     controller: 'PageCtrl'
		   })
		   .state('about', {
			       url:'/about',
	     	 templateUrl: 'partials/about.html',
		     controller: 'PageCtrl'
		   })
}]);
