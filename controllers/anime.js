app.controller('AnimeCtrl', function ($scope, $http) {
	$scope.CurrentQuestionID = 1
	$http.get("data/getQuestions.php")
	.success(function(responce) {$scope.questions = responce});
	console.log("Questions: " + $scope.questions);
	console.log("CurrentID:" + $scope.CurrentQuestionID);

});