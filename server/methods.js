Meteor.methods({
  adiciona: function(planeta){
    console.log("Adiciona");
    Planetas.insert(planeta);
  },
  edita: function(planeta) {
    Planetas.update({_id:planeta._id}, planeta);

  },
  buscaPorCodigo: function(id) {
    return Planetas.findOne({_id:id});

  },
  remove: function(id) {
    Planetas.remove({_id: id});
  }
});
