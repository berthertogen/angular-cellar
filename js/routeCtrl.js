function RouteCtrl($route) {

    var self = this;

    $route.when('/wines', {template:'js/welcome.html'});
    $route.when('/books', {template:'js/books/welcome-book.html'});

    $route.when('/wines/:wineId', {template:'js/wines/wine-details.html', controller:WineDetailCtrl});

    $route.otherwise({redirectTo:'/wines'});

    $route.onChange(function () {
        self.params = $route.current.params;
    });

    $route.parent(this);

    this.addWine = function () {
        window.location = "#/wines/add";
    };

}