function RouteCtrl($route) {

    var self = this;

    $route.when('/wines', {template:'tpl/welcome.html'});
    $route.when('/books', {template:'tpl/welcome-book.html'});

    $route.when('/wines/:wineId', {template:'tpl/wine-details.html', controller:WineDetailCtrl});

    $route.otherwise({redirectTo:'/wines'});

    $route.onChange(function () {
        self.params = $route.current.params;
    });

    $route.parent(this);

    this.addWine = function () {
        window.location = "#/wines/add";
    };

}

function WineListCtrl(Wine) {

    // this.wines = Wine.query();
    this.wines = [{
        id: 1,
        name: 'Test 1'
    }, {
        id: 2,
        name: 'Test 2'
    }];

}

function WineDetailCtrl(Wine) {

    // this.wine = Wine.get({wineId:this.params.wineId});
    this.wine = {
        id: 1,
        name: 'Test',
        grapes: 'Test Grapes',
        year: 2018,
        description: 'dfsdf ds fdsf sd fdsf dsf dsfds fsd'
    };


    this.saveWine = function () {
        if (this.wine.id > 0)
            this.wine.$update({wineId:this.wine.id});
        else
            this.wine.$save();
        window.location = "#/wines";
    }

    this.deleteWine = function () {
        this.wine.$delete({wineId:this.wine.id}, function() {
            alert('Wine ' + wine.name + ' deleted')
            window.location = "#/wines";
        });
    }

}