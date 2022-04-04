import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsPostsLoading } from '../../redux/Posts/PostsSelector';
import Spinner from '../../components/Spinner/Spinner';
import PostsOverview from './PostsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsPostsLoading(state),
});

const PostsOverviewContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(PostsOverview);

export default PostsOverviewContainer;
