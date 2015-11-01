import React from 'react';
import Radium from 'radium';
import Snippet from '../../Snippet';
import {bindShowHelper} from '../../utils';

const styles = {
  inlinePre: {
    display: 'inline'
  },
  slide: {
    textAlign: 'center'
  }
};

const examplesSource = `
export default 55;
import num from 'lib'; // num = 55
export function greet()...
export const number = 33;
import {greet, number} from 'lib';
import * as lib from 'lib';
export * as fields from './fields';
`;

@Radium
export default class Modules extends React.Component {
  static actionCount = 7;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);
    return (
      <div style={[this.props.style, styles.slide]}>
        <h1>Modules</h1>
        <Snippet source={show.withArray(examplesSource.split('\n'))} />
      </div>
    );
  }
}
