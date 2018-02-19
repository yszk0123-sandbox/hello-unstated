import * as React from 'react';

export class Container<State extends object> {
  state: State;
  private listeners: Function[] = [];

  setState(state: Partial<State>) {
    this.state = { ...this.state, ...state };
  }

  subscribe(fn:  Function) {
    this.listeners.push(fn);
  }

  unsubscribe(fn: Function) {
    this.listeners = this.listeners.filter(listener => listener !== fn);
  }
}

interface SubscribeProps {
  to: ContainerType<any>[];
  children(...instances: Container<any>[]): React.ReactNode;
}

export class Subscribe extends React.Component<SubscribeProps> {
  render() {
    return this.props.children(this.);
  }
}
