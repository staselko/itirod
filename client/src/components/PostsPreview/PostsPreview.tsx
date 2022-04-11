import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showNextPage } from '../../redux/Posts/PostsActions';
import { IRootReducer } from '../../redux/RootReducer';
import Button from '../Button/Button';
import PostItem from '../PostItem/PostItem';

import './PostsPreview.scss';

const PostsPreview: FC = () => {
  const { postsListToShow } = useSelector((state: IRootReducer) => state.posts);
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(8);
  const nextPage = () => {
    setPageNum(pageNum + 8);
    dispatch(showNextPage(pageNum));
  };

  return (
    <div>
      <div className="forum_home-data-field">
        {
        postsListToShow
          .map((item) => <PostItem key={item.id} {...item} />)
      }
      </div>
      <Button onClick={nextPage}>Next Page</Button>
    </div>
  );
};

export default PostsPreview;
