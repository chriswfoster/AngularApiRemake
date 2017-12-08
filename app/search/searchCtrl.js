angular
  .module("giphyApp")
  .controller("searchCtrl", function($scope, $stateParams, mainSrvc) {
      console.log(text)
    mainSrvc.getImages(textz).then(function(response) {
      $scope.allImages = response.data
    })

    $scope.text = {}
  })
