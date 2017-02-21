Template.Personality.events({
    'click .fa-trash': function() {
        Meteor.call('deletePersonality', this._id);
    },
});
