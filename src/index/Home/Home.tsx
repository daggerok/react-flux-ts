import * as React from 'react';
import { Link } from 'react-router';
/**
 * Created by mak on 6/12/16.
 */
interface Props {}
interface State {}

export class Home extends React.Component<Props, State> {
  render() {
    return (
      <div className="container-fluid">
        <h4>Home page</h4>
        <div><a href="#redirect-me-to-about">redirect me to about</a></div>
        <Link to="about"><button className="btn btn-primary btn-lg">meow...</button></Link>
      </div>
    );
  }
}

/*

  Lifecycle

 componentWillMount
   - before render
   - place for component initial states:

 componentDidMount
   - after render
   - DOM already exists
   - place to make needed ajax requests

 componentWillReceiveProps
   - before new property will receive
   - place to state state before render

 componentDidReceiveProps

 shouldComponentUpdate
   - not called on initial render
   - after render, before component will receive new property
   - return false to avoid unnecessary rendering

 componentWillUpdate
   - not called on initial render
   - call before rendering when new props/state being receive
   - useful to prepare update
   - do not call setState() in this function

 componentDidUpdate
   - call after component was updated and re-rendered in the DOM

 componentDidUnmount
   - place for cleanup before switching from the page

 */
