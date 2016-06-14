import * as React from 'react';

import { Author } from './Author';
import { AuthorDTO } from './AuthorDTO';
import { AuthorService } from './AuthorService';

/**
 * Created by mak on 6/12/16.
 */
interface Props {
}

export interface State {
  authors: AuthorDTO[];
}

export class AuthorList extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      authors: [
        {"id": 0, "username": "anonymous"}
      ]
    };
  }

  componentWillMount() {
    /*
    // class ref with state:
    AuthorService.findAllOtherWay(this);
    */

    AuthorService.findAll(
      (data: AuthorDTO[]) =>
        this.setState({ authors: data }));

    /*
    AuthorService.findAll(
      (data: AuthorDTO[]) =>
        this.setState({ authors: data }),
      (jqXHR: XMLHttpRequest) =>
        console.info(jqXHR.responseText)
    );
    */
  }
/*
  componentWillMount() {
    $.ajax('/Author')
      .then((data: AuthorDTO[]) => {
        console.log('fetching data..');
        this.setState({
          authors: data
        })
      })
      .fail((req: any, status: any, err: any) =>
        console.log('shit happens.. =[', status));
  }
*/
  componentWillUnmount() {
    this.setState({authors: []});
  }

  render() {
    return (
      <div>
        <h4>Our authors</h4>
        {this.state.authors.map((author, index) => {
          return <Author key={index} authorDto={author}/>;
        })}
      </div>
    );
  }
}
