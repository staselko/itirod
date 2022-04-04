import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './Home';
import { selectIsPostsLoading } from '../../redux/Posts/PostsSelector';
import Spinner from '../../components/Spinner/Spinner';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsPostsLoading(state),
});

const HomePageContainer: any = compose(
  connect(mapStateToProps),
  Spinner,
)(Home);

export default HomePageContainer;
