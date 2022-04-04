import axios from 'axios';
import { IPost } from '../../redux/Posts/PostsInterfaces';

export const mergePostsAndComments = async (posts: IPost[]): Promise<IPost[]> => await Promise.all(
  posts.map(async (post) => {
    const postComments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    return {
      ...post,
      comments: postComments.data,
    };
  }),
);
