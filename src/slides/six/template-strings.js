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
function greeter(name) {
  return 'Hello, ' + name + '!';
}
`,
`
function greeter(name) {
  return \`Hello, name!\`;
}
`,
`
function greeter(name) {
  return \`Hello, \${name}!\`;
}
`,
`
function whoNeedsAVirtualDOMWhenYouHaveStrings() {
  return \`
    <div>
      <h1>Hello World!</h1>
    </div>
  \`;
}
`
];

const taggedSourceSteps = [
`
const name = 'Terry';
\`Hello, \${name}!\`
`,
`
const name = 'Terry';
tag\`Hello, \${name}!\`
`,
`
function tag(strings, ...values) {
  // strings = ['Hello, ', '!']
  // values = ['Terry'];
}
`
];

@Radium
export default class Variables extends React.Component {
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
        <div style={show.until(5)}>
          <h1>`Template Strings`</h1>
          <Snippet style={show.from(1)} source={show.withArray(sourceSteps, 1)} />
        </div>
        <div style={show.from(5)}>
          <h1>tagged`Template Strings`</h1>
          <Snippet source={show.withArray(taggedSourceSteps, 5)} />
        </div>
      </div>
    );
  }
}
