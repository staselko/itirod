import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsUsersLoading } from '../../redux/Users/UserSelector';
import Spinner from '../Spinner/Spinner';
import PostsPreview from './PostsPreview';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsUsersLoading(state),
});

const PostsPreviewContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(PostsPreview);

export default PostsPreviewContainer;
