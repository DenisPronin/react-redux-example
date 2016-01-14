import React, { PropTypes } from 'react'

import styles from 'styles/components/friends-list.scss';

class addFriendInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.add = this.add.bind(this);
  }

  add() {
    this.props.actions.addFriend(this.state.name);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" className={styles['add-friend-input']}
               value={this.state.name}
               onChange={this.handleChange.bind(this)}
        />
        <button type="button" onClick={this.add}>Add</button>
      </div>
    )
  }
}

addFriendInput.propTypes = {
  actions: PropTypes.object.isRequired
};

export default addFriendInput;
