Router.configure({
  layoutTemplate: 'main',
  loadingTemplate: 'spinner',
  notFoundTemplate: 'not-found'
});

Router.route('/', function(){
  this.render('catalogo');
});

Router.route('planetas', function(){
  this.render('planetas');
});

Router.route('planetas/novo', function(){
  this.render('adiciona');
});
