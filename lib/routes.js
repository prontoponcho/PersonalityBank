FlowRouter.triggers.enter([function(context, redirect) {
    // If user not logged in, redirect to home
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        // reroute logged-in users
        if (Meteor.userId()) {
            FlowRouter.go('personalities');
        }
        BlazeLayout.render('HomeLayout');
    }
});

// dynamic template routing
FlowRouter.route('/personalities', {
    name: 'personalities',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Personalities' });
    }
});
