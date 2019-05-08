questApp.controller('AnswerController',
    function AnswerController($scope, $http){
         
        $scope.save = function (answer, answerForm){
            console.log(answer);
            $scope.d = answer.text;
            angular.element(document.getElementById('voor')).append( $scope.d);


        };
    }
)