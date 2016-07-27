// var app = angular.module('portfolio', []);

// app.controller('portfolioCtrl', function($scope, behanceFactory) {
//   $scope.behance = behanceFactory.async();
  
// });

// app.factory('behanceFactory', function($http) {  
//   var behance = {      
//     async: function(page) {
//       var user = 'tpalmerixd';
//       var apiKey = 'mtpmAyXMtH8bQwTRecHniqX3tO90f5UJ';
//       var url = 'http://behance.net/v2/users/'+ user +'/projects?api_key='+ apiKey +'&callback=JSON_CALLBACK';  

//       var promise = $http.jsonp(url).error(function (response, status) {
//         console.log(status);
//       }).success(function (response, status) {
//         console.log(response.projects);
//       }).then(function (response, status) {
//         return response.projects;           
//       });
//       return promise;

//     }};

//   return behance;
//   // return {
//   //     behance: function() {
//   //         return behance;
//   //     }
//   // };
  
// });

var app = angular.module('portfolio', []);

app.controller('portfolioCtrl', function($scope, behFactory) {
  $scope.behance = behFactory.async();
  
});

app.factory('behFactory', function($http) {  
  var factory = {      
    async: function(page) {
      var user = 'tpalmerixd';
      var apiKey = 'mtpmAyXMtH8bQwTRecHniqX3tO90f5UJ';
      var url = 'http://behance.net/v2/users/'+ user +'/projects?api_key='+ apiKey +'&callback=JSON_CALLBACK';     
        var promise = $http.jsonp(url).error(function (response, status) {
          alert(status);
        }).success(function (response, status) {
          console.log(response.projects);
        }).then(function (response, status) {
          return response.data;           
      });
      return promise;
    }};
  return factory;
  
});