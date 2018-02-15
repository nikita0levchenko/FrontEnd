app.controller('Homepage',['$scope',function($scope){
    $scope.homepage= "Главная";
}]);
app.controller('Contacts',['$scope',function($scope){
    $scope.contacts=new Date();
}]);
app.controller('Tournaments',['$scope',function ($scope){
    $scope.tournaments="Турниры";
}]);