import * as React from 'react';
import { AuthorDTO } from './model/AuthorDTO';

interface Props {
  authorDto: AuthorDTO;
}

export class Author extends React.Component<Props, {}> {
  render() {
    return <div>{this.props.authorDto.id} {this.props.authorDto.username}</div>;
  }
}
