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

const sourceSteps = [
`
name => \`Hey, \${name}!\`; // implicit return
`,
`
() => console.log(this); // lexical this
`,
`
(first, second) => {
  return first * second;
}
`,
`
actionName => {action: actionName} // don't even
`,
`
actionName => ({action: actionName}) // don't even
`,
`
list.map(function(item) {
  return item.name;
});
`,
`
list.map(item => item.name);
`
];


@Radium
export default class ArrowFunctions extends React.Component {
  static actionCount = 6;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);
    return (
      <div style={[this.props.style, styles.slide]}>
        <h1>() => 'Arrow functions!'</h1>
        <Snippet source={show.withArray(sourceSteps, 0)} />
      </div>
    );
  }
}
