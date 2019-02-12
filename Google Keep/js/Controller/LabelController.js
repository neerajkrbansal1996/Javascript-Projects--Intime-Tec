angular.module('myApp').controller('LabelController', ['$scope', '$mdDialog', 'labels', 'LabelsService' , function($scope, $mdDialog, labels, LabelsService){
      $scope.labels = LabelsService.all();
      $scope.selected = labels;

      $scope.toggle = function (label, list) {
        var idx = list.indexOf(label);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(label);
        }
      };

      $scope.exists = function (label, list) {
        return list.indexOf(label) > -1;
      };

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

