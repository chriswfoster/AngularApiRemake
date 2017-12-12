angular.module("giphyApp").controller("searchCtrl", function($scope, mainSrvc) {
  $scope.search = "";
  $scope.allImages = {};


  // mainSrvc.getImages($scope.monkey).then(function(response) {
  //   $scope.allImages = response.data.data
  // })
  $scope.getAllImages = function(obj){
  
    mainSrvc.getImages(obj)
  .then(
    response => (
      ($scope.allImages = response.data.data), console.log(response.data.data)
    )
  )
}


  $scope.whatever = function() {
    console.log($scope.search)
    console.log($scope.allImages)
  }
})
