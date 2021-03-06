Template.edita.onRendered(function() {
    Materialize.updateTextFields();
    var codigo = $("#codigo").val();
    var planeta = Planetas.findOne({
        _id: codigo
    });

    defineData(planeta.dataDescoberta);


});

var defineData = function(data) {
    var $input = $('.datepicker').pickadate()
    var picker = $input.pickadate('picker')
    picker.set('select', new Date(data));
}


Template.edita.events({
    "click #buttonSalvar": function(event, template) {
        event.preventDefault();

        var planeta = {
            _id: $('#codigo').val(),
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
        }

        Meteor.call("edita", planeta, function(error, result) {
            if (error) {
                Materialize.toast('Não salvou. Erro: ' + error, 4000);
            }
        });

        Router.go('/');
    },
    "click #buttonExcluir": function(event, template) {
        event.preventDefault();

        Meteor.call('remove', $('#codigo').val());

        Router.go('/');
    }
});
