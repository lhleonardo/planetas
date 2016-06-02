$(document).load(function(){

});

$(document).ready(function(){
  configuraHead();
  configuraBody();
  configuraElementos();
});

var configuraBody = function() {
  var script = $("<script>", {
    src : "/js/materialize.min.js"
  });

  $("body").append(script);
};

var configuraHead = function() {
  var meta = $("<meta>", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  });

  var title = $("<title>Planetas</title>");
  var linkIcons = $("<link>", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    // FAZER COM QUE ELE BUSQUE DO PROPRIO REPOSITORIO
    // href: "/fonts/material-design-icons/material.css",
    rel : "stylesheet"
  });

  $("head").append([meta, title, linkIcons]);
};

var configuraElementos = function(){
  $(".button-collapse").sideNav();
};
