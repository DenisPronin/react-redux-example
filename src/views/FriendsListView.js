import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actions as friendListActions } from '../redux/modules/friendsList'
import FriendList from '../components/friends/FriendsList'

import { Link } from 'react-router'

export class FriendsListView extends React.Component {

  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className='container text-center'>
        <h1>Friends List</h1>

        <FriendList
          friends={this.props.state.friendsList.friendsById}
          actions={this.props.actions} />

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
    actions: bindActionCreators(friendListActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsListView)
