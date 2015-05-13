var app = angular.module("IdeApp", []);
app.controller("IdeController",
    function($scope, $http) {
        $http.get("/api/developer")
         .success(function (response) {
             $scope.developers = response;
         });
        $scope.add = function (dev) 
            {
                $http.post('/api/developer', dev)
                .success(function (response) {
                    $scope.developers = response;
                })
            }

        $scope.remove = function (index) {
            $http.delete('/api/developer/'+ index)
            .success(function (response) {
                $scope.developers = response;
            })
        }
    });