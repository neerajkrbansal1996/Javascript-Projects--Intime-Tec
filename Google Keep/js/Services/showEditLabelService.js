angular.module('myApp').factory('showEditLabelService', ['$mdDialog', function($mdDialog){
	var factory = {};

	factory.showEditLabelModal = function(ev){
		return $mdDialog.show({
	      controller: 'EditLabelController',
	      templateUrl: './template/modal/edit-label.tmpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: false
	    });
	}

	return factory;
}])