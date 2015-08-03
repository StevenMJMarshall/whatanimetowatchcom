app.controller('QuestionsCtrl', function ($scope, $http) {
	$scope.CurrentQuestionID = 1
	$http.get("data/getQuestions.php")
		.success(function(response) {
			$scope.question = response
			console.log("Questions: " + $scope.question);
		});
	console.log("Questions: " + $scope.question);
	console.log("CurrentID:" + $scope.CurrentQuestionID);
	console.log("Word of the Day is: " + "bubbles");

});