import * as React from 'react';

interface P {}
interface S {}

const styles = {
  listStyleType: 'none'
};

export class Transition extends React.Component<P, S> {
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

  static onLeave() {
    console.log('leave', Date.now());
  }

  static onEnter() {
    console.log('enter', Date.now());
  }
}
