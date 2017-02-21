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
        type: String
    },
    url: {
        type: String
    }
});

PersonalitySchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    desc: {
        type: String,
        label: 'Description'
    },
    attrs: {
        type: [String]
    },
    links: {
        type: [Link]
    },
    mtbi: {
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
