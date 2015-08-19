import React from 'react';
import Radium from 'radium';
import {bindShowHelper} from '../utils';

@Radium
export default class ECMAStuff extends React.Component {
  static actionCount = 5;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);

    return (
      <div style={this.props.style}>
        <h1>ECMAScript</h1>
        <ul>
          <li style={[show.from(1)]}>Standardized by Ecma International</li>
          <li style={[show.from(2)]}>1.0: June 1997</li>
          <li style={[show.from(3)]}>2.0: June 1998</li>
          <li style={[show.from(4)]}>3.0: December 1999. Regex, try/catch</li>
          <li style={[show.from(5)]}>4.0: </li>
        </ul>
      </div>
    );
  }
}
