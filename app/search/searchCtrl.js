angular.module('giphyApp').controller('searchCtrl', function($scope, $stateParams, mainSrvc){
    mainSrvc.getImages().then(function(response) {
        $scope.allImages = response.data
    })
})