var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope, $http, autgra3) {

    $scope.PersonalPronouns = ['I', 'You', 'He', 'She', 'It', 'We', 'They'];
    $scope.ToBeList = ['am', 'are', 'is', 'was', 'were'];

    $scope.ListCommonNoun = [];
    $scope.ListPropperNoun = [];
    $scope.ListComplement = [];

    autgra3.ListCommonNoun().then(function (res) {
        $scope.ListCommonNoun = res.data
    });
    autgra3.ListPropperNoun().then(function (res) {
        $scope.ListPropperNoun = res.data
    });
    autgra3.Complement().then(function (res) {
        $scope.ListComplement = res.data
    });

})

myApp.service('autgra3', function ($http) {

    this.ListCommonNoun = function () {
        return $http({
            method: 'GET',
            url: '/api/commonNoun',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) {
            return res;
        }).catch(function (err) {
            return err;
        })
    }

    this.ListPropperNoun = function () {
        return $http({
            method: 'GET',
            url: '/api/propperNoun',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) {
            return res;
        }).catch(function (err) {
            return err;
        })
    }

    this.Complement = function () {
        return $http({
            method: 'GET',
            url: '/api/complement',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) {
            return res;
        }).catch(function (err) {
            return err;
        })
    }

});