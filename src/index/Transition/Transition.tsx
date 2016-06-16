import * as React from 'react';

interface P {
}
interface S {
}

const styles = {
  listStyleType: 'none'
};

// push('/') 1
interface R {
  push(path: string): any;
}
interface C {
  router: R;
}

export class Transition extends React.Component<P, S> {

  static contextTypes: React.ValidationMap<any> = {
    router: React.PropTypes.func.isRequired
  };

  context: C;

  componentDidMount() {
    this.choose();
  }

  choose() {
    if (this.cooseToBeOrNotToBe()) {
      console.log(`I have to go...`);
      this.context.router.push('/home');
    } else {
      console.log(`let's stay here!`);
    }
  }

  cooseToBeOrNotToBe(): boolean {
    return 0 === Date.now() % 2;
  }

  constructor() {
    super();

    this.state = {
      toBeOrNotToBe: this.cooseToBeOrNotToBe()
    };
  }
  //

  componentWillMount() {
    this.routerWillEnter();
  }

  componentWillUnmount() {
    this.routerWillLeave();
  }

  routerWillEnter() {
    console.log('enter dynamic');
  }

  routerWillLeave() {
    console.log('leave dynamic');
  }

  static willTransitionTo() {
    console.log('enter static');
  }

  static willTransitionFrom() {
    console.log('leave static');
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
