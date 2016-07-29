/* global angular : true codekit fix */
/* global console : true codekit fix */

var app = angular.module('portfolio', []);

app.controller('portfolioCtrl', function($scope, portfolioFactory) {
  // $scope.behance = behFactory.getBehance();
  // console.log($scope.behance);
  
  portfolioFactory.getBehance().then(function onFulfilled(data){
    $scope.behance = data;
    console.log(data);
  }).catch(function onRejected() {
    // This doesn't work
    console.log('Error in Behance Factory');
  });
});

app.factory('portfolioFactory', function($http) {  

  var getBehance = function() {
    var user = 'tpalmerixd';
    var apiKey = 'mtpmAyXMtH8bQwTRecHniqX3tO90f5UJ';
      return $http({method: 'GET', url: 'http://behance.net/v2/users/'+ user +'/projects?api_key='+ apiKey}).then(function onFulfilled(response) {
        return response.data.projects;
    });
  };
  return { 
    getBehance: getBehance 
  };

});