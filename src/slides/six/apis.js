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
  },
  snippet: {
    textAlign: 'center',
    fontSize: '1.4em'
  }
};

const sourceSteps = [
  `Number.EPSILON`,
  `Number.isInteger()`,
  `Number.isNaN()`,
  `Math.acosh()`,
  `Math.hypot()`,
  ``,
  `'hello'.repeat(2)`,
  `'aimlessly'.includes('less')`,
  ``,
  `Array.from()`,
  `[].find(func)`,
  `[].copyWithin()`,
  `[].findIndex()`,
  `[].fill()`,
  `[].entries()`,
  `[].keys()`,
  `[].values()`,
  ``,
  `Object.assign()`
];


@Radium
export default class BuiltinAPIs extends React.Component {
  static actionCount = sourceSteps.length - 1;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);
    return (
      <div style={[this.props.style, styles.slide]}>
        <h1>New builtin lib stuff</h1>
        <Snippet style={styles.snippet} source={show.withArray(sourceSteps, 0)} />
      </div>
    );
  }
}
