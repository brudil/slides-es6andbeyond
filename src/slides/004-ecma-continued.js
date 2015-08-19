import React from 'react';
import Radium from 'radium';
import {bindShowHelper} from '../utils';

@Radium
export default class ECMAStuffContinued extends React.Component {
  static actionCount = 2;
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
          <li>3.0: December 1999. Regex, try/catch</li>
          <li><del>4.0: Abandoned</del></li>
          <li style={[show.from(1)]}>5.0 (aka 3.1): December 2009</li>
          <li style={[show.from(2)]}>6.0 (aka Harmony): June 2015</li>
        </ul>
      </div>
    );
  }
}
