angular.module('myApp').controller('NoteController', ['$scope', '$mdDialog' ,'data', 'showLabelService', function($scope, $mdDialog, data, showLabelService){
	$scope.note = data;
	$scope.colors = Colors;
	$scope.labels = Labels;

	$scope.toggle = function (label, list) {
        var idx = list.indexOf(label);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(label);
        }
      };

    $scope.exists = function (label, list) {
        return list.indexOf(label) > -1;
    };

	// $scope.showLabelSelector = function(ev) {
	//     showLabelService.showLabelSelector(ev, $scope.note.labels).then(function(answer){
	// 		console.log(answer);
	// 	}, function(){
	// 		console.log("You cancelled the dialog...");
	// 	});
 //  	};

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