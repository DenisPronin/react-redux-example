import React, {PropTypes} from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        //why all the binds below? See here: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.props.actions.incrementCounter(this.props.appState);
    }

    render() {
        let settings = this.props.appState;

        return (
            <div>
                <h2>Counter</h2>
                <div>{settings.counter}</div>
                <input type="button" value="+" onClick={this.increment}/>
            </div>
        );
    }
}

Counter.propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
};

export default Counter;

