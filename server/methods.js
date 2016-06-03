Meteor.methods({
  adiciona:function(planeta){
    Planetas.insert(planeta);
  },
  remove: function (id) {

  }
});
