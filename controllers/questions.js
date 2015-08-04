app.controller('QuestionsCtrl', function ($scope, $http) {
	// Assign First Question
	$scope.QuestionID = 1;
	$scope.AnswerIDs = 1;

	// Pull Question data
	$http.get("includes/getQuestions.php")
		.success(function(response) {
			$scope.Question = response[$scope.QuestionID].Text;
			$scope.Questions = response;
			$scope.QAnswers = response[$scope.QuestionID].AnswerID;
		});

	// Get Answers data
	$http.get("includes/getAnswers.php")
		.success(function(response){
			$scope.Answers = response;
		});

});