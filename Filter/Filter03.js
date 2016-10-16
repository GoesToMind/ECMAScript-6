const post = { id: 4, title: 'New Post' };

const comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' },
];

const commentsForPost = (post, comments) => {
  return comments.filter(element => {
    return element.postId === post.id;
  });
};

const result = commentsForPost(post, comments);

console.log(result);
