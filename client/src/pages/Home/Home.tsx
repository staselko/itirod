import React, { FC } from 'react';
import PostsPreviewContainer from '../../components/PostsPreview/PostPreviewContainer';

import './Home.scss';

const Home: FC = () => (
  <div className="forum__home">
    <h1 className="forum__home-greet">Welcome, to the forum</h1>
    <PostsPreviewContainer />
  </div>
);

export default Home;
