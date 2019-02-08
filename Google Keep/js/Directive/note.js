angular.module('myApp').directive('note', function(){
	return {
		restrict : 'E',
		replace : true,
		templateUrl : './template/directive/note.tmpl.html',
		scope : {
			note : "=",
			showNote : "&"
		}
	}
});