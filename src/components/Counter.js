import React, {PropTypes} from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    decrement() {
        this.props.actions.decrementCounter(this.props.appState);
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
                <input type="button" value="-" onClick={this.decrement}/>
            </div>
        );
    }
}

Counter.propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
};

export default Counter;

