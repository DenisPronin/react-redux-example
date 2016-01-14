import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actions as githubUsersActions } from '../redux/modules/githubUsers'

import { Link } from 'react-router'

export class GithubUsersView extends React.Component {

  constructor(props) {
    super(props);

    this.props.actions.fetchUsers();
  }

  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className='container text-center'>
        <h1>Github Users</h1>

        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(githubUsersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubUsersView)
