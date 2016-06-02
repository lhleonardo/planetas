Template.catalogo.helpers({
  planetas: function () {
    return Planetas.find({}).fetch();
  }
});
