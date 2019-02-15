angular.module('myApp').controller('SidebarController', ['$scope','showEditLabelService', 'LabelsService','$location', function($scope, showEditLabelService, LabelsService, $location){
	$scope.labels = LabelsService.all();

	$scope.showEditLabelModal = function(ev) {
	    showEditLabelService.showEditLabelModal(ev).then(function(answer){
	    	console.log(answer);
	    },function(){
	    	console.log("You Cancelled the dialog...");
	    })
  	};

  	$scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
};
}]);