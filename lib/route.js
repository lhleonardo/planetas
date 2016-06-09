Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'not-found',
    waitOn: function() {
        return Meteor.subscribe("planetas");
    }
});

Router.plugin('dataNotFound', {
    notFoundTemplate: 'not-found-planeta'
});

Router.map(function() {
    this.route('catalogo', {
        path: '/'
    });
    this.route('planetas');
    this.route('adiciona', {
        path: '/planetas/new'
    })
    this.route('sobre');
    this.route('edita', {
        path: '/planetas/edit/:_id',
        data: function() {
            planeta = Planetas.findOne({
                _id: this.params._id
            });
            if (planeta === null) {
                Router.go('not-found');
            } else {
                return planeta;
            }
        }
    });

    this.route('detalhe', {
        path: '/planetas/:_id',
        data: function() {
            return Planetas.findOne({
                _id: this.params._id
            });
        }
    })
});
