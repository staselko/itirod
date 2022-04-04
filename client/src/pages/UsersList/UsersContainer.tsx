import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Spinner from '../../components/Spinner/Spinner';
import Users from './Users';
import { selectIsUsersLoading } from '../../redux/Users/UserSelector';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsUsersLoading(state),
});

const UsersContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(Users);

export default UsersContainer;
