function WineDetailCtrl(Wine) {

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