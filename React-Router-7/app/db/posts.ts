const BLOG_POSTS = [
  { id: 1, title: "Post 1", description: "Description 1" },
  { id: 2, title: "Post 2", description: "Description 2" },
  { id: 3, title: "Post 3", description: "Description 3" },
];

export const getPosts = () => {
  return BLOG_POSTS;
};

export const getPostById = (id: number) => {
  const findedPost = BLOG_POSTS.find((post) => post.id === id);
  if (!findedPost) {
    throw new Error("Post not found");
  }
  return findedPost;
};

export const createPost = (post: { title: string; description: string }) => {
  const newPost = { id: BLOG_POSTS.length + 1, ...post };
  BLOG_POSTS.push(newPost);
};
