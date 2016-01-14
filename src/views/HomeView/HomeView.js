import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actions as counterActions } from '../../redux/modules/counter'
import Counter from '../../components/counter/Counter'

import { Link } from 'react-router'

export class HomeView extends React.Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    let settings = this.props.state;

    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <Counter value={settings.counter} actions={this.props.actions} />
        <hr />
        <div><Link to='/friends'>Go to Friends List Page</Link></div>
        <div><Link to='/404'>Go to 404 Page</Link></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
