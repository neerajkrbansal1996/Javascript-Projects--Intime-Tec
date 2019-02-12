angular.module('myApp').filter('notesFilter', function(){
	return function(items, label){
		var filtered = [];
		if(label != ""){
			for(var i=0;i<items.length;i++){
			if(items[i].labels.indexOf(label) > -1){
				filtered.push(items[i]);
			}
			}	
		}else{
			filtered = items;
		}
		
		return filtered;
	};
});