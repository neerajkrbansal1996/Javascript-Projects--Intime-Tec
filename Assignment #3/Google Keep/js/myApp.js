var myApp = angular.module("myApp", ['ngMaterial' ,'ngRoute','ngStorage'])
			.config(['$routeProvider',function($routeProvider) {
				$routeProvider.when('/notes',{
					templateUrl : './template/view/notes.tmpl.html',
					controller : 'NotesController'
				}).when('/notes/labelled/:label', {
					templateUrl : './template/view/notes.tmpl.html',
					controller : 'NotesController'
				}).when('/trashed', {
					templateUrl : './template/view/trashed.tmpl.html',
					controller : 'NotesController'
				}).otherwise({
					redirectTo : '/notes'
				});
			}])



