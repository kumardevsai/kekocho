import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavBar from './nav_bar';

const mapStateToProps = (state, ownProps) => {
  return{
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));