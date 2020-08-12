(function(){
  'use strict';
  angular.module("LunchCheck", []).
  controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope, $filter){
   $scope.lunch_menu = "";
   $scope.lunch_menu_show_message = "";

   $scope.fnLunchCheck = function () {
     if($scope.lunch_menu.trim().length > 0){
       var items =  $scope.lunch_menu.split(',');
       if($scope.checkListEmpty(items)){
         if (items.length > 0) {
           if (items.length <= 3)
              $scope.lunch_menu_show_message = "Enjoy!";
           else
             $scope.lunch_menu_show_message = "Too much!";
         }
       }
       else{
         $scope.lunch_menu_show_message = "Please make sure to put a comment somewhere next to the input " +
         "textbox stating that you do NOT consider and empty item, i.e., , , as an item towards to the count.";
      }
     }
     else
        $scope.lunch_menu_show_message = "Please enter data first";
   }

   $scope.checkListEmpty = function(listItems){
     var count = 0;
     angular.forEach(listItems, function(item){
       if(item.trim().length === 0){
        count++;
       }
     });
     if(count > 0) return false;
     return true;
   }
  }
})();
