angular.module('myApp').controller('ColorsController', ['$scope', '$mdDialog' ,'note', function($scope, $mdDialog, note){

    $scope.localNote = note;
    $scope.colors = Colors;

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

