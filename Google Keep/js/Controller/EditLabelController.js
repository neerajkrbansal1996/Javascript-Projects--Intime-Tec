angular.module('myApp').controller('EditLabelController', ['$scope', '$mdDialog', 'LabelsService','$localStorage','$window', function($scope, $mdDialog, LabelsService, $localStorage, $window){

   $scope.labels = LabelsService.all();
   $scope.newLabel = "";
   $scope.notes = $localStorage.notes || [];
   $scope.trashed = $localStorage.trashed || [];
   $scope.labelInput = false;
   $scope.changedLabel = "";

   console.log($scope.notes);
   
   $scope.saveNewLabel = function(){
     if($scope.newLabel != ""){
       LabelsService.add($scope.newLabel);
     }
   }


   $scope.deleteLabel = function(label){
     
     if ($window.confirm("Please confirm?")) {
         LabelsService.remove(label);
         for(let i=0;i<$scope.notes.length;i++){
            let idx = $scope.notes[i].labels.indexOf(label);
            if(idx>-1){
              $scope.notes[i].labels.splice(idx, 1);
            }
         }
         console.log($scope.notes);
      }else {
            console.log('You Clicked No!');
        }
   }

   $scope.toggleLabelInput = function(){
     if($scope.labelInput){
       $scope.labelInput = false;
     }else{
       $scope.labelInput = true;
     }
   }

   $scope.saveEdit = function(event, index) {
     console.log(event);
     for (var i = 0; i < $scope.notes.length; i++) {
       var idx = $scope.notes[i].labels.indexOf($scope.labels[index]);
       if(idx > -1){
          $scope.notes[i].labels[idx] = event.target.value;
       }
     }
      for (var i = 0; i < $scope.trashed.length; i++) {
       var idx = $scope.trashed[i].labels.indexOf($scope.labels[index]);
       if(idx > -1){
          $scope.trashed[i].labels[idx] = event.target.value;
       }
     }

     $scope.labels[index] = event.target.value;

     $scope.toggleLabelInput();
   } 

    $scope.hide = function() {
        $mdDialog.hide();
      };

    $scope.cancel = function() {
        $mdDialog.cancel();
      };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    
}]);

