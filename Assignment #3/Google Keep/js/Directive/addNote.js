angular.module('myApp').directive('addNote', function(){
	return {
		restrict : 'E',
		templateUrl : './template/directive/addNote.tmpl.html',
		replace : true,
		scope: {
			title: "=",
			desc: "=",
			showLabel: "&",
			showColor: "&",
			save : "&"
		}	
	};
});