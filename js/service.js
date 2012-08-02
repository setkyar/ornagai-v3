angular.module('searchService', ['ngResource']).
    factory('Results', function($resource){
        return $resource('http://www.ornagai.com/index.php/api/word/q/:keyword/format/json',{},{});
});
