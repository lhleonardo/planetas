Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'spinner',
  notFoundTemplate: 'not-found',
  waitOn: function(){
    //return Meteor.subscribe("planetas");
  }
});

Router.map(function(){
  this.route('catalogo', {path: '/'});
  this.route('planetas');
  this.route('adiciona', {path: 'planetas/novo'})
});
