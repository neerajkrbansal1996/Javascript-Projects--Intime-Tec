angular.module('myApp').controller('NotesController', ['$scope','$mdDialog','showLabelService', 'showColorService', 'showNoteService' , function($scope, $mdDialog, showLabelService, showColorService, showNoteService){

	$scope.note = {};

	$scope.note.title = "";
	$scope.note.desc = "";
	$scope.note.labels = [];
	$scope.note.color = Colors.White;

	$scope.notes = [];

	console.log($scope.note.color);

	$scope.addNote = function () {
		if($scope.note.title == "" || $scope.note.desc == ""){
			alert("Please Provide Valid Input!");
			return;
		}
		$scope.notes.push(new Note($scope.note.title, $scope.note.desc, $scope.note.labels, $scope.note.color));
		console.log($scope.notes);
		clear();
		// $scope.$apply();
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
	// $scope.showLabelSelector = function(ev) {
	//     $mdDialog.show({
	//       locals : {labels : $scope.labels},
	//       controller: 'LabelController',
	//       templateUrl: './template/label.tmpl.html',
	//       parent: angular.element(document.body),
	//       targetEvent: ev,
	//       clickOutsideToClose:true,
	//       fullscreen: false
	//     })
	//     .then(function(answer) {
	//       console.log(answer);
	//     }, function() {
	//       console.log('You cancelled the dialog.');
	//     });
 //  	};

 	$scope.showColorsSelector = function(ev){
 		showColorService.showColorsSelector(ev, $scope.note.color).then(function(answer){
 			console.log(answer);
 			console.log("Colors" + $scope.note.color);
 			$scope.note.color = answer;
 		},function(){
 			console.log("You cancelled the dialog...");
 		})
 	}

  	// $scope.showColorsSelector = function(ev) {
	  //   $mdDialog.show({
	  //     locals : {color : $scope.color},
	  //     controller: 'ColorsController',
	  //     templateUrl: './template/color.tmpl.html',
	  //     parent: angular.element(document.body),
	  //     targetEvent: ev,
	  //     clickOutsideToClose:true,
	  //     fullscreen: false
	  //   })
	  //   .then(function(answer) {
	  //     console.log(answer);
	  //   }, function() {
	  //     console.log('You cancelled the dialog.');
	  //   });
  	// };

  	$scope.showNoteModal = function(ev, note) {
	    showNoteService.showNoteModal(ev, note).then(function(answer){
	    	console.log(answer);
	    },function(){
	    	console.log("You Cancelled the dialog...");
	    })
  	};

  // $mdDialog.show({
	 //      locals : {data : note},
	 //      controller: 'NoteController',
	 //      templateUrl: './template/note.tmpl.html',
	 //      parent: angular.element(document.body),
	 //      targetEvent: ev,
	 //      clickOutsideToClose:true,
	 //      fullscreen: false
	 //    })
	 //    .then(function(answer) {
	 //    	console.log(answer);
	 //    }, function() {
	 //      console.log('You cancelled the dialog.');
	 //    });

}]);