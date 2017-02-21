Personalities = new Mongo.Collection('personalities');

// Restrict db changes to logged in users.
Personalities.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

Link = new SimpleSchema({
    name: {
        type: String,
        label: 'Website Name'
    },
    url: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        label: 'URL'
    }
});

PersonalitySchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Person\'s Name',
    },
    desc: {
        type: String,
        label: 'Short Description',
    },
    links: {
        optional: true,
        type: [Link],
    },
    mtbi: {
        optional: true,
        type: String,
        label: 'Myers-Briggs Type Indicator'
    },
    author: {
        type: String,
        label: 'Author',
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: 'hidden'
        }

    },
    createdAt: {
        type: Date,
        label: 'Created At',
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: 'hidden'
        }
    }
});

Personalities.attachSchema(PersonalitySchema);

Meteor.methods({
    deletePersonality: function(id) {
        Personalities.remove(id);
    }
});
