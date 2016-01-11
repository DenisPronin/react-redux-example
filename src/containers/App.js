import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';

function App({ pushPath, children }) {
    return (
        <div>
            <header>
                Links:
        {' '}
                <Link to="/">Home</Link>
        {' '}
                <Link to="/foo">Foo</Link>
        {' '}
                <Link to="/bar">Bar</Link>
            </header>
            <div>
                <button onClick={() => pushPath('/foo')}>Go to /foo</button>
            </div>
            <div style={{marginTop: '1.5em'}}>{children}</div>
        </div>
    );
}

export default connect(
    null,
    { pushPath }
)(App);


/*
 // This file bootstraps the app with the boilerplate necessary
 // to support hot reloading in Redux
 import React, {PropTypes} from 'react';
 import { bindActionCreators } from 'redux';
 import { connect } from 'react-redux';
 import Counter from '../components/Counter';
 import * as actions from '../actions/actions';

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
 actions: bindActionCreators(actions, dispatch)
 };
 }

 export default connect(
 mapStateToProps,
 mapDispatchToProps
 )(App);

* */
