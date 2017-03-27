
var app_search = angular.module("app.search",['ui.router']);

app_search.config(function($stateProvider,$urlRouterProvider,$controllerProvider){	
	
	app_search.controller = $controllerProvider.register;
	
	$stateProvider	
	 .state('app.search',{
		url: "/search",
		views:{
			"content@app":{
				templateUrl:"modules/search/templates/main.html",
				controller: 'searchCtlr',
					resolve: {
						scripts: function(customeLoadScript){
						return customeLoadScript.register('modules/search/controllers/searchController.js');
					}
			   }
			}	
		}
				
	})	
	
});

