angular.module('myApp').factory('showNoteService', ['$mdDialog', function($mdDialog){
	var factory = {};

	factory.showNoteModal = function(ev, note){
		return $mdDialog.show({
	      locals : {data : note},
	      controller: 'NoteController',
	      templateUrl: './template/modal/note.tmpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: false
	    });
	}

	return factory;
}]);