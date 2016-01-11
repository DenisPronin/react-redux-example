// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as counterActions from '../actions/counterActions';

class App extends React.Component {
    render() {
        const { appState, actions } = this.props;

        return (
            <Counter appState={appState} actions={actions} />
        );
    }
}

App.propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        appState: state.appState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);