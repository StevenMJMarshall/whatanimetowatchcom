app.config(function ($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: "views/start.html",
			controller: "watwCtrl"
		})
		.when('#',{
			templateUrl: "views/start.html",
			controller: "watwCtrl"
		})
		.when('/firstquestion',{
			templateUrl: "views/fq.html",
			controller: "watwCtrl"
		})
		.when('/newtoanime',{
			templateUrl: "views/nta/nta.html",
			controller: "watwCtrl"
		})
		.when('/animewatcher',{
			templateUrl: "views/aw.html",
			controller: "watwCtrl"
		})
		.when('/FantasyActionAdventure',{
			templateUrl: "views/nta/faa.html",
			controller: "watwCtrl"
		})
		.when('/FantasyActionDrama',{
			templateUrl: "views/nta/fad.html",
			controller: "watwCtrl"
		})
		.when('/RoadTripClassic',{
			templateUrl: "views/nta/rtc.html",
			controller: "watwCtrl"
		})
		.when('/Comedy',{
			templateUrl: "views/nta/c.html",
			controller: "watwCtrl"
		})
		.when('/CrimeDrama',{
			templateUrl: "views/nta/cd.html",
			controller: "watwCtrl"
		})
		.when('/ScienceFiction',{
			templateUrl: "views/nta/sf.html",
			controller: "watwCtrl"
		})
		.when('/FullmetalAlchemistBrotherhood',{
			templateUrl: "views/nta/fmab.html",
			controller: "watwCtrl"
		})
		.when('/animeobsessed',{
			templateUrl: "views/ao.html",
			controller: "watwCtrl"
		})
		.otherwise({
			templateUrl: "views/start.html",
			controller: "watwCtrl"
		})
})