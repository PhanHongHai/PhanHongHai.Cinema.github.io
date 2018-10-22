 var app = angular.module('myApp',['ngMaterial']);
 app.controller('MyController',  function($scope){
 	$scope.hienThi =false;
 	$scope.showEdit=function (){
 		$scope.hienThi = !$scope.hienThi;
 	}

 })