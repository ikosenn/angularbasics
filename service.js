//service

myApp = angular.module('myApp', ['']);

myApp.factory('notifications', function(answer){

	string = "The operation resulted to: " + answer.toString();

	window.alert(string);

});



