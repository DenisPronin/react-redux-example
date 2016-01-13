import React, { PropTypes } from 'react'

import FriendListItem from './FriendListItem'
import AddFriendInput from './FriendsAddInput'

class FriendsList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let friends = this.props.friends;
    return (
      <div>
        <AddFriendInput actions={this.props.actions} />
        <ul className='friend-list'>
          {
            Object.keys(friends).map(friendKey => {
              let friend = friends[friendKey];
              return <FriendListItem key={friend.id} friend={friend} actions={this.props.actions} />
            })
          }
        </ul>
      </div>
    )
  }
}

FriendsList.propTypes = {
  friends: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendsList;
