
Template.adiciona.events({
    "submit form": function(event, template) {
        event.preventDefault();

        var planeta = {
            nomeCatalogo: $("#nomeCatalogo").val(),
            apelido: $("#apelido").val(),
            dataDescoberta: $("#dataDescoberta").val(),
            tipoPlaneta: $("#tipoPlaneta").val(),
            constituicao: $("#constituicao").val(),
            constituicaoAtmosferica: $("#constituicaoAtmosferica").val(),
            localizacao: $("#localizacao").val(),
            dimensoes: {
                raio: $("#raio").val(),
                massa: $("#massa").val()
            },
            estrela: $("#estrela").val(),
            distanciaSol: $("#distancia-sol").val(),
            url: $("#url").val(),
            fauna: $("#fauna").val(),
            flora: $("#flora").val(),
            descricao: $("#descricao").val()
        };

        Meteor.call('adiciona', planeta, function(error, result) {
            if (error) {
                Materialize.toast('Não salvou. Erro: ' + error, 4000);
            }
        });

        Router.go('/');
    }
});
