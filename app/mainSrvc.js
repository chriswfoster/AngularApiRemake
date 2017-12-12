angular.module("giphyApp").service("mainSrvc", function($http) {
  this.getImages = function(obj) {
    return $http
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${obj}&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=10`
      )
      .then(response => response)
  }
})
