MontaRegistro = function pega() {
    return {
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
}
