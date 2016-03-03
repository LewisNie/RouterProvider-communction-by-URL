app.config(function configureRouter($routeProvider){
    $routeProvider.when('/cat/:cat_id',{
        templateUrl: '/views/cat.html',
        controller: 'catController'
    }).when('/dog',{
        templateUrl:'views/dog.html',
        controller:'dogController'
    })
});
