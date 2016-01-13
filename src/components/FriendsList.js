import React, { PropTypes } from 'react'

import FriendListItem from './FriendListItem'

class FriendsList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let friends = this.props.friends;
    return (
      <ul className='friend-list'>
        {
          Object.keys(friends).map(friendKey => {
            let friend = friends[friendKey];
            return <FriendListItem key={friend.id} friend={friend} actions={this.props.actions} />
          })
        }
      </ul>
    )
  }
}

FriendsList.propTypes = {
  friends: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendsList;
