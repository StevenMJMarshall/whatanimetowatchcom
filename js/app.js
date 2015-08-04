var app = angular.module('watw', ['ngRoute'])

app.config(function ($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: "views/templates/questionsanswers.html",
			controller: "QuestionsCtrl"
		})
		.when('/Questions',{
			templateUrl: "views/templates/questionsanswers.html",
			controller: "QuestionsCtrl"
		})
		.when('/Anime',{
			templateUrl: "views/templates/animedetails.html",
			controller: "AnimeCtrl"
		})
		.when('/about',{
			templateUrl: "pages/about.html",
		})
		.when('#about',{
			templateUrl: "pages/about.html",
		})
		.when('/donate',{
			templateUrl: "pages/donate.html",
		})
		.when('#donate',{
			templateUrl: "pages/donate.html",
		})
		.otherwise({
			templateUrl: "views/templates/questionsanswers.html",
			controller: "QuestionsCtrl"
		})
})