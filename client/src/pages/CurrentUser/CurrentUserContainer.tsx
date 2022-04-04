import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsGettingCurrentUser } from '../../redux/Users/UserSelector';
import Spinner from '../../components/Spinner/Spinner';
import CurrentUser from './CurrentUser';
import { IRootReducer } from '../../redux/RootReducer';

const mapStateToProps = createStructuredSelector({
  isLoading: (state: IRootReducer) => selectIsGettingCurrentUser(state),
});
const CurrentUserContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(CurrentUser);

export default CurrentUserContainer;
