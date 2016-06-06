var app = angular.module('my', []);
app.controller('myCtrl', function($scope, $location) {
    var users=[
        {
            "email":"1275201845@qq.com",
            "password":"lxl19960109"
        }
    ];
    $scope.email = "";
    $scope.password = "";
    $scope.submit = function() {
        if($scope.email==users[0].email) {
            if ($scope.password == users[0].password) {
                alert("登陆成功");
                $scope.email="";
                $scope.password="";
            }

        }
    }
});

