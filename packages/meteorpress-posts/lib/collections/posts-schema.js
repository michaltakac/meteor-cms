Schemas.Posts = new SimpleSchema({
  title: {
    type: String
  },
  slug: {
    type: String,
    optional: true
  },
  content: { // I'll change this to content... silly me lmao
    type: String,
    autoform: {
      rows: 10
    }
  },
  category: {
    type: String
  },
  tags: {
    type: String,
    optional: true
  },
  author: {
    type: String,
    label: 'Author',
    autoValue: function() {
      if (this.isInsert) {
        return Meteor.userId();
      }
    }
  },
  updatedAt: {
    type: Date,
    label: 'Updated',
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    optional: true
  },
  createdAt: {
    type: Date,
    label: 'Created',
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    },
    optional: true
  }
});

Posts.attachSchema(Schemas.Posts);
