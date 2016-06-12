/**
 * Created by mak on 6/8/16.
 */
import * as React from 'react';

import { AboutComponentStyles } from './About.css';

interface Props {
  keywords?: string[];
}

export class About extends React.Component<Props, {}> {
  public render() {
    return (
      <div className='container'>
        {/*jsx attrs: className instead of class, htmlFor instead of for*/}
        <h3 className='panel'>hi!</h3>
        <div>lets learn something</div>
        <ul className="list-style-none">
          {this.props.keywords.map((keyword, index) => <li key={index}>{keyword}</li>)}
          <li>...?</li>
        </ul>
        <img src="http://cdn.shopify.com/s/files/1/0860/3518/products/rightmeow_comp.jpg?v=1432861786" alt=""/>
        <div style={AboutComponentStyles}>testing pragmatically assigned styles from react component</div>
      </div>
    );
  }
}
