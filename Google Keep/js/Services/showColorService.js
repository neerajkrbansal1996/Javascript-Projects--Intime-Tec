angular.module('myApp').factory('showColorService', ['$mdDialog', function($mdDialog){
	var factory = {};

	factory.showColorsSelector = function(ev, object){
		return $mdDialog.show({
	      locals : {note : object},
	      controller: 'ColorsController',
	      templateUrl: './template/modal/color.tmpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: false
	    })
	}

	return factory;
}])