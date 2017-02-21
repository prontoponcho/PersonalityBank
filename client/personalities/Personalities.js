Template.Personalities.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('personalities');
    });
});

Template.Personalities.helpers({
    personalities: () => {
        return Personalities.find({});
    }
});

Template.Personalities.events({
    'click .new-personality': () => {
        if (!Meteor.userId()) {
            FlowRouter.go('home');
        } else {
            Session.set('addPersonality', true);
        }
    }
});
