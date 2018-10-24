 var app = angular.module('myApp',['ngRoute']);
 app.controller('MyController',  function($scope){
 	$scope.hienThi =false;
 	$scope.showEdit=function (){
 		$scope.hienThi = !$scope.hienThi;
 	}

 })
 app.config(function ($routeProvider) {
 	var urlLocal="http://localhost:8080/PROJECT/testLRV/resources/views/";
 	$routeProvider.
 	when('/nvAdd',{
 		templateUrl:urlLocal+'admin/nhanVien_add.html'
 	})
 	.when('/nvEdit', {
 		templateUrl:urlLocal+'admin/nhanVien_edit.php'
 	})


})