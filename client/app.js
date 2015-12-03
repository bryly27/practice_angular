var cg = angular.module('cg', ['ui.router', 'froala']);


cg.config(function($urlRouterProvider, $stateProvider){

	$urlRouterProvider.otherwise('guide');

	$stateProvider
		// nav bar
		.state('members', {
			templateUrl: 'members/members.html'
		})
		.state('members.guide', {
			url: '/guide',
			templateUrl: 'guideEditor/guideEditor.html'
		})







});
