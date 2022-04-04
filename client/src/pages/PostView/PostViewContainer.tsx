import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PostViev from './PostView';
import { selectIsPostsLoading } from '../../redux/Posts/PostsSelector';
import Spinner from '../../components/Spinner/Spinner';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsPostsLoading(state),
});

const PostViewContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(PostViev);

export default PostViewContainer;
