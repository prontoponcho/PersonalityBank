// Template.Personality.onCreated(function() {
//     // Set a variable scoped to this template
//     this.editMode = new ReactiveVar(false);
// });

// Template.Personality.helpers({
//     // returns the current recipe's id
//     updateRecipeId: function() {
//         return this._id;
//     },
//     editMode: function() {
//         // return the variable scoped to this template
//         return Template.instance().editMode.get();
//     }
// })

Template.Personality.events({
    'click .fa-trash': function() {
        Meteor.call('deletePersonality', this._id);
    },
});
