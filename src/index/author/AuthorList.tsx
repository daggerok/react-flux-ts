import * as React from 'react';
import { Author } from './Author';
import { AuthorDTO } from './AuthorDTO';

interface Props {}
interface State {
  authors: AuthorDTO[];
}

export class AuthorList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {authors: [
      {"id": 1, "username": "Max"}
    ]};
  }

  render() {
    return (
      <div>
        <h4>Authors</h4>
        {this.state.authors.map((author, index) => {
          return <Author key={index} authorDto={author}/>;
        })}
      </div>
    );
  }
}
