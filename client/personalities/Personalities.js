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
    'click .new-recipe': () => {
        Session.set('addPersonality', true);
    }
});

// return [{
//     name: "Him",
//     desc: "A dood",
//     attrs: [
//         { attr: 'attr1' },
//         { attr: 'attr2' },
//         { attr: 'attr3' }
//     ],
//     links: [
//         { link: 'link1' },
//         { link: 'link2' },
//         { link: 'link3' }
//     ],
//     mtbi: 'ENTJ'
// }, {
//     name: "Her",
//     desc: "A gurl",
//     attrs: ['attr1', 'attr2', 'attr3'],
//     links: ['link1', 'link2', 'link3'],
//     mtbi: 'INFP'
// }];
