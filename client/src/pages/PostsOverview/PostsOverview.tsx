import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse } from '@mui/material';
import PostItem from '../../components/PostItem/PostItem';
import { IRootReducer } from '../../redux/RootReducer';

const PostsOverview = () => {
  const { postsListToShow } = useSelector((state: IRootReducer) => state.posts);
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    setCollapse(true);
    return () => setCollapse(false);
  }, []);
  return (
    <div className="forum__post-page">
      {
        postsListToShow
          .map((item) => (
            <Collapse key={item._id} in={collapse}>
              <PostItem key={item._id} {...item} />
            </Collapse>
          ))
      }
    </div>

  );
};

export default PostsOverview;
