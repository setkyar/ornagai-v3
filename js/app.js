angular.module('ornagai', ['searchService']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'view/welcome.html'}).
      when('/search/:keyword', {templateUrl: 'view/search.html', controller: resultDetailCtrl}).
      otherwise({redirectTo: '/'});
}]);