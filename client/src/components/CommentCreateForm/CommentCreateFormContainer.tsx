import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CommetnCreateForm from './CommentCreateForm';
import { selectIsGettingCurrentUser } from '../../redux/Users/UserSelector';
import Spinner from '../Spinner/Spinner';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsGettingCurrentUser(state),
});

const CommetnCreateFormContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(CommetnCreateForm);

export default CommetnCreateFormContainer;
