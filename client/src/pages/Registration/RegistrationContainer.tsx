import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsUsersCreating } from '../../redux/Users/UserSelector';
import Spinner from '../../components/Spinner/Spinner';
import Registration from './Registration';
import { IRootReducer } from '../../redux/RootReducer';

const mapStateToProps = createStructuredSelector({
  isCreating: (state: IRootReducer) => selectIsUsersCreating(state),
});

const RegistrationContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(Registration);

export default RegistrationContainer;
