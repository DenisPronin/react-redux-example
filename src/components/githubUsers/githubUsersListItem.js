import React, { PropTypes } from 'react'
import classNames from 'classnames/bind';

import styles from '../../styles/components/github-users.scss';
let cx = classNames.bind(styles);

class GithubUsersListItem extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetchUsers();
  }

  toggleUser(id) {
    console.log(id);
  }

  render () {
    let user = this.props.user;
    let userInfoClasses = cx('col-md-12', 'user__info');

    return (
      <li key={ user.id } className={cx('user-list__item', 'list-group-item', 'col-md-12')}>
        <div className={userInfoClasses} onClick={this.toggleUser.bind(this, user.id)}
             data-toggle="collapse" data-target={'#collapse-user-panel_' + user.id}>
          <div className="col-md-4">
            <img src={user.avatar_url} className={styles['user-avatar']}/>
          </div>
          <div className="col-md-8">
            { user.login }
          </div>
        </div>

        <div className="collapse" id={'#collapse-user-panel_' + user.id}>
          loading...
        </div>
      </li>
    )
  }
}

GithubUsersListItem.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default GithubUsersListItem;
