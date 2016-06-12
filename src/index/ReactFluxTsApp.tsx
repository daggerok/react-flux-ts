/**
 * Created by mak on 6/8/16.
 */
import * as React from 'react';

import { ReactFluxTsAppComponentStyles } from './ReactFluxTsApp.css';

interface Props {
  keywords?: string[];
}

export class ReactFluxTsApp extends React.Component<Props, {}> {
  public render() {
    return (
      <div className='container'>
        <h3 className='panel'>hi!</h3>
        <div>lets learn something</div>
        <ul className="list-style-none">
          {this.props.keywords.map((keyword, index) => <li key={index}>{keyword}</li>)}
          <li>...?</li>
        </ul>
        <img src="http://cdn.shopify.com/s/files/1/0860/3518/products/rightmeow_comp.jpg?v=1432861786" alt=""/>
        <div style={ReactFluxTsAppComponentStyles}>testing pragmatically assigned styles from react component</div>
      </div>
    );
  }
}
