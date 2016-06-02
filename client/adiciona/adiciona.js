Template.adiciona.events({
  "submit form": function(event, template){
    event.preventDefault();
    var planeta = {
      nomeCatalogo: $("#nomeCatalogo").val(),
      apelido: $("#apelido").val(),
      dataDescoberta: $("#dataDescoberta").val(),
      tipoPlaneta: $("#tipoPlaneta").val(),
      constituicao: $("#constituicao").val(),
      constituicaoAtmosferica: $("#constituicaoAtmosferica").val(),
      localizacao: $("#localizacao").val(),
      dimensoes : {
        area: $("#area").val(),
        diametro: $("#diametro").val()
      },
      distanciaSol: $("#distancia-sol").val(),
      fauna: $("#fauna").val(),
      flora: $("#flora").val(),
      descricao: $("#descricao").val()
    };

    Planetas.insert(planeta);

    alert('salvo com sucesso')

  }
});
