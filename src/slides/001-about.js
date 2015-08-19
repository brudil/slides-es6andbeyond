import React from 'react';
import Radium from 'radium';
import {bindShowHelper} from '../utils';

@Radium
export default class AboutSlide extends React.Component {
  static actionCount = 3;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);

    return (
      <div style={this.props.style}>
        <h1>I am James.</h1>
        <h2 style={[show.from(1)]}>@brudil <small style={[show.from(2)]}>…everywhere</small></h2>
        <p style={[show.from(3)]}>Last year at Grain Creative. Uni next month.</p>
      </div>
    );
  }
}
