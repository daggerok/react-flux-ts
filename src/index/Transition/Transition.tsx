import * as React from 'react';

interface P {}
interface S {
  counter: number;
}

const styles = {
  listStyleType: 'none'
};

export class Transition extends React.Component<P, S> {

  constructor() {
    super();

    this.state = { counter: 0 };
  }

  componentWillMount() {
    this.routerWillEnter();
  }

  componentWillUnmount() {
    this.routerWillLeave();
  }

  routerWillEnter() {
    console.log('enter dynamic', this.incrementAndGet());
  }

  routerWillLeave() {
    console.log('leave dynamic', this.incrementAndGet());
  }

  incrementAndGet(): number {
    this.setState({
      counter: this.state.counter + 1
    });
    return this.state.counter;
  }

  static willTransitionTo() {
    console.log('enter static', Date.now());
  }

  static willTransitionFrom() {
    console.log('leave static', Date.now());
  }

  render() {
    return (
      <div style={styles} className="container-fluid">
        <h4>transitions</h4>

        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>FLux</li>
        </ul>
      </div>
    );
  }
}
