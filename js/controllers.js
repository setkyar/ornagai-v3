function searchCtrl($scope,$routeParams)
{
    $scope.histories = [];
  
    $scope.search=function(keyword) {
        $scope.histories.push({name:keyword});
        window.location = "#/search/"+keyword;
    };
    $scope.currentKeyword=$routeParams.keyword;
}

function resultDetailCtrl($scope,Results, $routeParams)
{
  $scope.results = Results.get({keyword:$routeParams.keyword});

}