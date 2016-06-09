Meteor.methods({
    'adiciona': function(planeta) {
        Planetas.insert(planeta);
    },
    'edita': function(planeta) {
        Planetas.update({
            _id: planeta._id
        }, planeta);

    },
    
    'remove': function(id) {
        Planetas.remove({
            _id: id
        });
    }
});
