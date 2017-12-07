angular.module('giphyApp').service('mainSrvc', function($http) {
this.getImages = function(){
    return $http({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/search?q=test&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=10'
    })
}
})

