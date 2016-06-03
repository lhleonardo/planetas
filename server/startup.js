Meteor.startup(function(){
  Meteor.publish("planetas", function(){
    return Planetas.find({});
  });
});
