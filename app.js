var myapp = angular.module('sortableApp', ['ui.sortable', 'ngMaterial']);


myapp.controller('sortableController', function ($scope) {
  var tmpList = [];
  
  $scope.rawScreens = [
    [{
      icon: 'a.jpg',
      title: 'Facebook (a)',
      link: 'http://www.facebook.com'
    }, {
      icon: 'b.jpg',
      title: 'Youtube (a)',
      link: 'http://www.youtube.com'
    }, {
      icon: 'c.jpg',
      title: 'Pinterest (a)',
      link: 'http://www.pinterest.com'
    }],
    [{
      icon: 'a.jpg',
      title: 'Facebook (a)',
      link: 'http://www.facebook.com'
    }, {
      icon: 'b.jpg',
      title: 'Youtube (a)',
      link: 'http://www.youtube.com'
    }, {
      icon: 'c.jpg',
      title: 'Pinterest (a)',
      link: 'http://www.pinterest.com'
    }],
    [{
      icon: 'a.jpg',
      title: 'Facebook (a)',
      link: 'http://www.facebook.com'
    }, {
      icon: 'b.jpg',
      title: 'Youtube (a)',
      link: 'http://www.youtube.com'
    }, {
      icon: 'c.jpg',
      title: 'Pinterest (a)',
      link: 'http://www.pinterest.com'
    }],
    [{
      icon: 'a.jpg',
      title: 'Facebook (a)',
      link: 'http://www.facebook.com'
    }, {
      icon: 'b.jpg',
      title: 'Youtube (a)',
      link: 'http://www.youtube.com'
    }, {
      icon: 'c.jpg',
      title: 'Pinterest (a)',
      link: 'http://www.pinterest.com'
    }],
    [{
      icon: 'a.jpg',
      title: 'Facebook (a)',
      link: 'http://www.facebook.com'
    }, {
      icon: 'b.jpg',
      title: 'Youtube (a)',
      link: 'http://www.youtube.com'
    }, {
      icon: 'c.jpg',
      title: 'Pinterest (a)',
      link: 'http://www.pinterest.com'
    }],
    [{
      icon: 'a.jpg',
      title: 'Facebook (a)',
      link: 'http://www.facebook.com'
    }, {
      icon: 'b.jpg',
      title: 'Youtube (a)',
      link: 'http://www.youtube.com'
    }, {
      icon: 'c.jpg',
      title: 'Pinterest (a)',
      link: 'http://www.pinterest.com'
    }]
  ];
  
  $scope.list1 = $scope.rawScreens[0];
  $scope.list2 = $scope.rawScreens[1];
  $scope.list3 = $scope.rawScreens[2];
  $scope.list4 = $scope.rawScreens[3];
  $scope.list5 = $scope.rawScreens[4];
  $scope.list6 = $scope.rawScreens[5];
  
  
  $scope.sortingLog = [];
  
  $scope.sortableOptions = {
    placeholder: "app",
    connectWith: ".apps-container"
  };
  
});