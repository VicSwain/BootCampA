// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
    constructor(authorname, title, text, createdOn) {
    this.authorname = authorname;
    this.title = title;
    this.text = text;
    this.comments = [];
    this.createdOn = createdOn;
    }
    printMetaData() {
        console.log(`Created by ${this.authorName} on ${this.createdOn}`);
}
    addComment(comment) {
        this.comments.push(comment);
    }
}




class Comment {
    constructor(authorName, text, createdOn) {
        this.authorName = authorName;
        this.text = text;
        this.createdOn = createdOn;
        }
    printMetaData() {
        console.log(`Created by ${this.authorName} on ${this.createdOn} with ${this.text}`);
}
}


// TODO: Give BlogPost a property called 'comments' that is set to an empty array.

// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.

// TODO: Create a new object using the Comment class constructor. DO THIS
const newComment = 
// TODO: Create a new object using the BlogPost class constructor. DO THIS

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array. DO THIS

// TODO: Print the meta data for both the BlogPost and the Comment to the console. do this
newPost.addComment(newComment);
