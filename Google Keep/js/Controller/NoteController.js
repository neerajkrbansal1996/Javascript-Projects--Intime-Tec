angular.module('myApp').controller('NoteController', ['$scope', '$mdDialog' ,'data', 'showLabelService', function($scope, $mdDialog, data, showLabelService){
	$scope.note = data;
	$scope.colors = Colors;
	$scope.labels = Labels;

	$scope.showLabelSelector = function(ev) {
	    showLabelService.showLabelSelector(ev, $scope.note.labels).then(function(answer){
			console.log(answer);
		}, function(){
			console.log("You cancelled the dialog...");
		});
  	};

	$scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
     $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
     $mdDialog.hide(answer);
    };
}]);