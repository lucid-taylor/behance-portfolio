/* global angular : true codekit fix */
/* global console : true codekit fix */

var app = angular.module('portfolio', []);

app.controller('portfolioCtrl', function($scope, portfolioFactory) {
  $scope.behanceLoaded = false;
  $scope.dribbbleLoaded = false;
  
  portfolioFactory.getBehance().then(function onFulfilled(data){
    $scope.behance = data;
    $scope.behanceLoaded = true;
  }).catch(function onRejected() {
    console.log('Error in Behance Factory');
  });

  portfolioFactory.getDribbble().then(function onFulfilled(data){
    $scope.dribbble = data;
    $scope.dribbbleLoaded = true;
  }).catch(function onRejected() {
    console.log('Error in Dribbble Factory');
  });

  // portfolioFactory.getMedium().then(function onFulfilled(data){
  //   $scope.medium = data;
  //   $scope.mediumLoaded = true;
  // }).catch(function onRejected() {
  //   // This doesn't work
  //   console.log('Error in Medium Factory');
  // });
});

app.factory('portfolioFactory', function($http) {  

  var getBehance = function() {
    var user = 'tpalmerixd';
    var apiKey = 'mtpmAyXMtH8bQwTRecHniqX3tO90f5UJ';
      return $http({method: 'GET', url: 'http://behance.net/v2/users/'+ user +'/projects?api_key='+ apiKey}).then(function onFulfilled(response) {
        return response.data.projects;
    });
  };

  var getDribbble = function() {
    var user = 'taylorpalmer';
    var apiKey = '32f6310e856d9e7ce2245fc5c609d6b273e6920c77489b3c3cdd018e271b3bcd';
      return $http({method: 'GET', url: 'https://api.dribbble.com/v1/users/' + user + '/shots?access_token=' + apiKey }).then(function onFulfilled(response) {
        return response.data;
    });
  };

  // var getMedium = function() {
  //     return $http({method: 'GET', url: 'https://medium.com/feed/@taylorp'}).then(function onFulfilled(response) {
  //       function transformData(response) {
  //         // convert the data to JSON and provide
  //         // it to the success function below
  //           var x2js = new X2JS();
  //           var json = x2js.xml_str2json( response );
  //           console.log(json);
  //           return json;
  //       }
  //   });
  // };

  return { 
    getBehance: getBehance,
    getDribbble: getDribbble,
    //getMedium: getMedium
  };

});