angular.module('myApp').controller('NotesController', ['$scope','$mdDialog','showLabelService', 'showColorService', 'showNoteService', '$routeParams','$localStorage', '$window' , function($scope, $mdDialog, showLabelService, showColorService, showNoteService, $routeParams, $localStorage, $window){

	$scope.note = {};

	$scope.note.title = "";
	$scope.note.desc = "";
	$scope.note.labels = [];
	$scope.note.color = Colors.White;
	$scope.params = $routeParams.label || "";
	$scope.notes = $localStorage.notes || [];
	
	$localStorage.notes = $scope.notes;

	if($routeParams.label){
		$scope.note.labels.push($scope.params);
	}

	$scope.addNote = function () {
		if($scope.note.title == "" || $scope.note.desc == ""){
			alert("Please Provide Valid Input!");
			return;
		}
		$scope.notes.push(new Note($scope.note.title, $scope.note.desc, $scope.note.labels, $scope.note.color));
		clear();
		// $scope.$apply();
	}

	$scope.deleteNote = function(note){

        if ($window.confirm("Please confirm?")) {
            var idx = $scope.notes.indexOf(note);
			if(idx > -1){
				$scope.notes.splice(idx, 1);
				console.log($scope.notes);
			}
        } else {
            console.log('You Clicked No!');
        }

		
	}

	function clear() {
		$scope.note.title = "";
		$scope.note.desc = "";
		$scope.note.labels = [];
		$scope.note.color = Colors.White;
	}

	$scope.showLabelSelector = function(ev){
		showLabelService.showLabelSelector(ev, $scope.note.labels).then(function(answer){
			console.log(answer);
		}, function(){
			console.log("You cancelled the dialog...");
		});
	}

 	$scope.showColorsSelector = function(ev){
 		showColorService.showColorsSelector(ev, $scope.note).then(function(answer){
 			console.log(answer);
 			console.log("Colors" + $scope.note.color);
 			// $scope.note.color = answer;
 		},function(){
 			console.log("You cancelled the dialog...");
 		})
 	}

  	$scope.showNoteModal = function(ev, note) {
	    showNoteService.showNoteModal(ev, note).then(function(answer){
	    	console.log(answer);
	    },function(){
	    	console.log("You Cancelled the dialog...");
	    })
  	};


}]);