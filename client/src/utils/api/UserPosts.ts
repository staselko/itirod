import { IPost } from '../../redux/Posts/PostsInterfaces';
import { IUser } from '../../redux/Users/UsersInterfaces';

export const mergeUserAndPosts = (users: IUser[], posts: IPost[]): IUser[] => users.map((user) => {
  const currentUserPosts: IPost[] = posts.filter((item) => Number(item.userId) === user.id);
  return {
    ...user,
    imageUrl: 'https://picsum.photos/200/300',
    posts: currentUserPosts,
  };
});
