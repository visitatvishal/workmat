
var app_user = angular.module("app.user",['ui.router']);

app_user.config(function($stateProvider,$urlRouterProvider,$controllerProvider){	
	
	app_user.controller = $controllerProvider.register;
	
	$stateProvider	
	 .state('app.login',{
		url: "/user/login",
		views:{
			"content@app":{
				templateUrl:"modules/user/templates/login.html",
				controller: 'loginCtlr',
					resolve: {
						scripts: function(customeLoadScript){
						return customeLoadScript.register('modules/user/controllers/loginController.js');
					}
			   }
			}	
		}
				
	})	
	
});

