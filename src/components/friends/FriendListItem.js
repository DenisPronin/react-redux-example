import React, { PropTypes } from 'react'

class FriendsListItem extends React.Component {
  constructor (props) {
    super(props);
  }

  star(id) {
    this.props.actions.starFriend(id);
  }

  remove(id) {
    this.props.actions.removeFriend(id);
  }

  render () {
    let friend = this.props.friend;
    return (
      <li key={ friend.id }>
        <div>
          { friend.name }
        </div>
        <div className='friend-action'>
          <a href='#' onClick={this.star.bind(this, friend.id)}>
            { friend.starred ? 'has star' : 'no star' }
          </a>

          <a href='#' onClick={this.remove.bind(this, friend.id)}>
            remove
          </a>
        </div>
      </li>
    )
  }
}

FriendsListItem.propTypes = {
  friend: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendsListItem;
