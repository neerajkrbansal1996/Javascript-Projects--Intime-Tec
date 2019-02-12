angular.module('myApp').controller('SidebarController', ['$scope','showEditLabelService', 'LabelsService', function($scope, showEditLabelService, LabelsService){
	$scope.labels = LabelsService.all();

	$scope.showEditLabelModal = function(ev) {
	    showEditLabelService.showEditLabelModal(ev).then(function(answer){
	    	console.log(answer);
	    },function(){
	    	console.log("You Cancelled the dialog...");
	    })
  	};
}]);