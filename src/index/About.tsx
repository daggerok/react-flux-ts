import * as React from 'react';

import { AboutComponentStyles } from './About.css';

/**
 * Created by mak on 6/8/16.
 */
interface Props {}
interface State {
  keywords?: string[];
}

export class About extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { keywords: [] };
  }

  componentWillMount() {
    this.setState({
      keywords: [
        'TypeScript',
        'React',
        'React Router',
        'Flux',
        '...?'
      ]
    });
  }

  public render() {
    return (
      <div className="container-fluid">
        {/*jsx attrs: className instead of class, htmlFor instead of for*/}
        <h3 className='panel'>hi!</h3>
        <img src="http://cdn.shopify.com/s/files/1/0860/3518/products/rightmeow_comp.jpg?v=1432861786" alt=""/>
        <div style={AboutComponentStyles}>lets learn something</div>
        <ul className="list-style-none">
          {this.state.keywords.map((keyword, index) => <li key={index}>{keyword}</li>)}
        </ul>
      </div>
    );
  }
}
