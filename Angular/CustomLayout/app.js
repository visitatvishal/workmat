
var app = angular.module("app",[
	'ui.router',
	
	'app.user',	
	'app.search',

	
	'admin'		

]);

app.config(function($stateProvider,$urlRouterProvider,$controllerProvider){	
	
	app.controller = $controllerProvider.register;
	
	$urlRouterProvider.otherwise("/user/login");
	
	$stateProvider
	
	.state('app',{
		abstract: true,
		views:{
			root:{
				templateUrl:"layout/app/layout.html",
			}
		}		
		
	})
	
	.state('admin',{
		abstract: true,
		views:{
			root:{
				templateUrl:"layout/admin/layout.html",
			}
		}		
		
	})
	
});

app.directive("customInclude",function(){
	return {
		replace:true,
		restrict: 'A',
		templateUrl:function(elem, attr){
			return attr.customInclude;
		}
	}
	
});

app.factory('customeLoadScript',function($q){
 
 return{
  
  register:function(script){
   
     var deferred = $q.defer();
     var ele = document.createElement('script');
     ele.onload = function(){
      console.log(script+" is loaded");
      deferred.resolve(script);
     };
     ele.src = script;
     var x = document.getElementsByTagName('script')[0];
     x.parentNode.insertBefore(ele, x);
     return deferred.promise; 
  }
  
 };
 
});
