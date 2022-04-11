import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsUsersLoading } from '../../redux/Users/UserSelector';
import Spinner from '../../components/Spinner/Spinner';
import User from './User';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsUsersLoading(state),
});

const UserPageContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(User);

export default UserPageContainer;
