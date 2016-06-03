Template.formulario.onRendered(function() {
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        format: 'dd/mm/yyyy', // formatando a data
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $("select").material_select();
});
