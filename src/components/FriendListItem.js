import React, { PropTypes } from 'react'

class FriendsListItem extends React.Component {
  constructor (props) {
    super(props);
  }

  star(id) {
    this.props.actions.starFriend(id);
  }

  render () {
    return (
      <li key={ this.props.friend.id }>
        <div>
          { this.props.friend.name }
        </div>
        <div className='friend-action'>
          <button type='button' onClick={this.star.bind(this, this.props.friend.id)}>
            *
          </button>
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
