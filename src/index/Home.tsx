import * as React from 'react';

interface HomeProps {}

export class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
      <div className="container-fluid">
        <h4>Home page</h4>
      </div>
    );
  }
}

/*

  Lifecycle

 // before render
 // place for component initial states:
 componentWillMount

 // after render
 // DOM already exists
 // place to make needed ajax requests
 componentDidMount

 // before new property will receive
 // place to state state before render
 componentWillReceiveProps

 componentDidReceiveProps

 // not called on initial render
 // after render, before component will receive new property
 // return false to avoid unnecessary rendering
 shouldComponentUpdate

 // not called on initial render
 // call before rendering when new props/state being receive
 // useful to prepare update
 // do not call setState() in this function
 componentWillUpdate

 // call after component was updated and re-rendered in the DOM
 componentDidUpdate

 // place for cleanup before switching from the page
 componentDidUnmount

 table
  tbody
   tr
    <tr key={id}> required
 */
