import React, { PropTypes } from 'react'

class Counter extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    value: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className='counter__container'>
        <h2>
          Sample Counter:&nbsp;
          <span className='counter--green'>{this.props.value}</span>
        </h2>
        <button className='btn btn-default'
                onClick={() => this.props.actions.increment(1)}>
          Increment
        </button>
        <button className='btn btn-default'
                onClick={this.props.actions.doubleAsync}>
          Double (Async)
        </button>
      </div>
    );
  }
}

export default Counter;

