import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actions as githubUsersActions } from '../redux/modules/githubUsers'
import GithubUsersList from '../components/githubUsers/githubUsersList'

import { Link } from 'react-router'

export class GithubUsersView extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.actions.fetchUsers();
  }

  render () {
    return (
      <div className='container text-center'>
        <div className="container">
          <GithubUsersList
            users={this.props.state.githubUsers}
            actions={this.props.actions} />
        </div>

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
