var app=angular.module("portfolio",[]);app.controller("portfolioCtrl",function(e,t){e.behanceLoaded=!1,e.dribbbleLoaded=!1,t.getBehance().then(function n(t){e.behance=t,e.behanceLoaded=!0})["catch"](function o(){console.log("Error in Behance Factory")}),t.getDribbble().then(function r(t){e.dribbble=t,e.dribbbleLoaded=!0})["catch"](function c(){console.log("Error in Dribbble Factory")}),e.medium=t.getMedium().then(function a(t){e.medium=t,e.mediumLoaded=!0})["catch"](function i(){console.log("Error in Medium Factory")})}),app.factory("portfolioFactory",function(e){var t=function(){var t="tpalmerixd",n="mtpmAyXMtH8bQwTRecHniqX3tO90f5UJ";return e({method:"GET",url:"https://behance.net/v2/users/"+t+"/projects?api_key="+n,headers:{"Content-Type":"text/plain","Access-Control-Allow-Origin":"*"}}).then(function o(e){return e.data.projects})},n=function(){var t="taylorpalmer",n="32f6310e856d9e7ce2245fc5c609d6b273e6920c77489b3c3cdd018e271b3bcd";return e({method:"GET",url:"https://api.dribbble.com/v1/users/"+t+"/shots?access_token="+n}).then(function o(e){return e.data})},o=function(){var t="https://medium.com/feed/@taylorp/";return e.jsonp("//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q="+encodeURIComponent(t)).then(function n(e){return e.data.responseData.feed.entries})};return{getBehance:t,getDribbble:n,getMedium:o}});