angular.module('myApp').factory('LabelsService', ['$localStorage', function($localStorage){
	var labels = $localStorage.labels || [];

	$localStorage.labels = labels;

	return {
		all : function(){
			return labels;
		},
		add : function(label){
			if(!labels.includes(label)){
					labels.push(label);
			}else{
				alert('Label Already Exists');
			}
		},
		remove : function(label){
			labels.splice(labels.indexOf(label),1);
		},

	};
}])