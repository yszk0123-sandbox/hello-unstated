/* tslint:disable no-console */
import * as React from 'react';
import { Subscribe, Container } from './unstated';

interface CounterState {
  count: number;
}

class CounterContainer extends Container<CounterState> {
  state = {};

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
}

export default function Counter() {
  return (
    <Subscribe to={[CounterContainer]}>
      {counter => (
        <div>
          <button onClick={() => counter.decrement()}>-</button>
          <button onClick={() => counter.increment()}>+</button>
        </div>
      )}
    </Subscribe>
  );
}
