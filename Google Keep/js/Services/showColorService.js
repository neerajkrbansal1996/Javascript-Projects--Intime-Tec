angular.module('myApp').factory('showColorService', ['$mdDialog', function($mdDialog){
	var factory = {};

	factory.showColorsSelector = function(ev, color){
		return $mdDialog.show({
	      locals : {color : color},
	      controller: 'ColorsController',
	      templateUrl: './template/color.tmpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: false
	    })
	}

	return factory;
}])