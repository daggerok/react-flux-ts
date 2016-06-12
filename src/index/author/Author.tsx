import * as React from 'react';

import { AuthorDTO } from './AuthorDTO';

/**
 * Created by mak on 6/12/16.
 */
interface Props {
  authorDto: AuthorDTO;
}

export class Author extends React.Component<Props, {}> {
  render() {
    return <div className="container-fluid">
      {this.props.authorDto.id} {this.props.authorDto.username}
    </div>;
  }
}
