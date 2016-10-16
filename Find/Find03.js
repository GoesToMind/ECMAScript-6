const posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' },
];

const comments = { postId: 1, content: 'Great Post' };

const postForComment = (posts, comments) => {
  return posts.find(element => {
    return element.id === comments.postId;
  });
};

const post = postForComment(posts, comments);

console.log(post);
