// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem {
  constructor(authorName, createdOn, text) {
  this.authorName = authorName;
  this.createdOn = createdOn;
  this.text = text;
}
};


// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
// extends provides the inheritence 
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    // super is necessary when using extends
   super(authorName, createdOn, text);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}

const newForumItem = new ForumItem ();

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment('Vic', '2/27/24', 'Test', ':)');

// TODO: Create a new object using the BlogPost class constructor.
const newBlogPost = new BlogPost('Vic', '2/27/24', 'Test','Huracan');
// TODO: Log both newly created BlogPost and Comment to the console.
// BlogPost.newBlogPost();
// Comment.newComment();
newBlogPost.addComment(newComment.reaction);
console.log(newBlogPost);
console.log(newComment);