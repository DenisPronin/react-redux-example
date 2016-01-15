import React, { PropTypes } from 'react'

import GithubUsersListItem from './githubUsersListItem';
import classNames from 'classnames/bind';
import styles from '../../styles/components/github-users.scss';
let cx = classNames.bind(styles);

class GithubUsersList extends React.Component {
  constructor (props) {
    super(props);
    this.loadingLabel = 'Loading...';
    this.usersModel = this.props.users;
  }

  loadingBlock() {
    if (this.props.users.pending) {
      return <h2><i>{this.loadingLabel}</i></h2>
    }
    else return '';
  }

  listBlock() {
    if (!this.props.users.pending && !this.props.users.errorMessage) {
      let listClasses = cx('user-list', 'list-group', 'col-md-6');

      return (
        <ul className={listClasses}>
          {
            Object.keys(this.props.users.userById).map(userKey => {
              let user = this.props.users.userById[userKey];
              return (
                <GithubUsersListItem key={user.id} user={user} actions={this.props.actions} />
              );
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
