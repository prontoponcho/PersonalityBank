Template.HomeLayout.events({
    'click .btn-primary': function() {
        if (!Meteor.userId()) {
            $('.btn-primary').html('Sign in first');
        }
        Session.set('addPersonality', true);
        FlowRouter.go('personalities');
    }
});

Tracker.autorun(function() {
    if (Meteor.userId()) {
        $('.btn-primary').html('<i class="fa fa-plus-square"></i> Add a Personality');
    }
});
