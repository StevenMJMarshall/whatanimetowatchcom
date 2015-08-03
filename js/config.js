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
			controller: ""
		})
		.otherwise({
			templateUrl: "views/templates/questionsanswers.html",
			controller: "QuestionsCtrl"
		})
})