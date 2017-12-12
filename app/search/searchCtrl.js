angular.module("giphyApp").controller("searchCtrl", function($scope, mainSrvc) {
  $scope.text = "Search Here"
$scope.allImages = {}
  mainSrvc.getImages($scope.text).then(function(response) {
    $scope.allImages = response.data
  })
  $scope.whatever = function() {
    console.log($scope.allImages)
  }
})
