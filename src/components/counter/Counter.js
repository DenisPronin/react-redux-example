import React, { PropTypes } from 'react'

class Counter extends React.Component {
  constructor (props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.doubleAsync = this.doubleAsync.bind(this);
  }

  increment() {
    this.props.actions.increment(1);
  }

  decrement() {
    this.props.actions.decrement(1);
  }

  doubleAsync() {
    this.props.actions.doubleAsync();
  }

  render () {
    return (
      <div className='counter__container'>
        <h2>
          Sample Counter:&nbsp;
          <span className='counter--green'>{this.props.value}</span>
        </h2>
        <button className='btn btn-default' onClick={this.increment}>
          Increment
        </button>
        <button className='btn btn-default' onClick={this.decrement}>
          Decrement
        </button>
        <button className='btn btn-default' onClick={this.doubleAsync}>
          Double (Async)
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default Counter;

