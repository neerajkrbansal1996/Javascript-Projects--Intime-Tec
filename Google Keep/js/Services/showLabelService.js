angular.module('myApp').factory('showLabelService', ['$mdDialog', function($mdDialog){
	var factory = {};

	factory.showLabelSelector = function(ev, labels){
		return $mdDialog.show({
	      locals : {labels : labels},
	      controller: 'LabelController',
	      templateUrl: './template/label.tmpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: false
	    })
	}

	return factory;
}])