angular.module('myApp').controller('ColorsController', ['$scope', '$mdDialog' ,'color', function($scope, $mdDialog, color){

    $scope.selectedColor = color;
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

