angular.module('myApp').controller('EditLabelController', ['$scope', '$mdDialog', 'LabelsService','$localStorage','$window', function($scope, $mdDialog, LabelsService, $localStorage, $window){

   $scope.labels = LabelsService.all();
   $scope.newLabel = "";
   $scope.notes = $localStorage.notes || [];

   console.log($scope.notes);
   $scope.saveNewLabel = function(){
     if($scope.newLabel != ""){
       LabelsService.add($scope.newLabel);
     }
   }

   $scope.deleteLabel = function(label){
     
     if ($window.confirm("Please confirm?")) {
         LabelsService.remove(label);
         for(var i=0;i<$scope.notes.length;i++){
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

