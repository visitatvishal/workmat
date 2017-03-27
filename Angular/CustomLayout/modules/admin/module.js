
var admin = angular.module("admin",['ui.router']);

admin.config(function($stateProvider,$urlRouterProvider,$controllerProvider){	
	
	admin.controller = $controllerProvider.register;
	
	$stateProvider	
	 .state('admin.login',{
		url: "/admin",
		views:{
			"admin_content@admin":{
				templateUrl:"modules/admin/templates/login.html",
				controller: 'loginCtlr',
					resolve: {
						scripts: function(customeLoadScript){
						return customeLoadScript.register('modules/admin/controllers/loginController.js');
					}
			   }
			}	
		}
				
	})	
	
});

