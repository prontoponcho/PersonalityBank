Meteor.publish('personalities', function() {
    // Only allow user access to their personalities
    return Personalities.find({ author: this.userId });
});
