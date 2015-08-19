import React from 'react';
import Radium from 'radium';
// import {bindShowHelper} from '../utils';

@Radium
export default class TitleSlide extends React.Component {
  static actionCount = 0;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    // const show = bindShowHelper(this.props.actionIndex);
    return (
      <div style={this.props.style}>
        <h1>ES6 and beyond</h1>
      </div>
    );
  }
}
