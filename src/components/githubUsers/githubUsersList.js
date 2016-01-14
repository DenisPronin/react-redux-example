import React, { PropTypes } from 'react'

import styles from '../../styles/components/github-users.scss';

class GithubUsersList extends React.Component {
  constructor (props) {
    super(props);
    this.loadingLabel = 'Loading...';
    this.usersModel = this.props.users;
  }

  loadingBlock() {
    if(this.props.users.pending) {
      return <h2><i>{this.loadingLabel}</i></h2>
    }
    else return '';
  }

  listBlock() {
    if(!this.props.users.pending && !this.props.users.errorMessage) {
      return (
        <ul>
          {
            Object.keys(this.props.users.userById).map(userKey => {
              let user = this.props.users.userById[userKey];
              return (
                <li key={ user.id }>{user.login}</li>
              )
            })
          }
        </ul>
      )

    }
    else return '';
  }

  render () {
    return (
      <div>
        <h1>Github Users</h1>
        {this.loadingBlock()}
        {this.listBlock()}
      </div>
    )
  }
}

GithubUsersList.propTypes = {
  users: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default GithubUsersList;
