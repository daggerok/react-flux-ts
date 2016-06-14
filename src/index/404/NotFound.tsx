import * as React from 'react';
import { Link } from 'react-router';

/**
 * Created by mak on 6/12/16.
 */
interface Props {}
interface State {}

export class NotFound extends React.Component<Props, State> {
  render() {
    return (
      <div className="container-fluid">
        <div>Sry, but page was not found =[ </div>
        <Link to="home"><button className="btn btn-default btn-lg">go home</button></Link>
      </div>
    );
  }
}
