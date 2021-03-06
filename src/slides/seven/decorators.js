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

const examplesSource = [
`

class Person {

  name() {return \`\${this.first} \${this.last}\`}
}
`,
`

class Person {
  @readonly
  name() {return \`\${this.first} \${this.last}\`}
}
`,
`
(target) => {}
(target, name, descriptor) => {}
`

]
;

@Radium
export default class Decorators extends React.Component {
  static actionCount = 2;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);
    return (
      <div style={[this.props.style, styles.slide]}>
        <h1>@decorators</h1>
        <Snippet source={show.withArray(examplesSource)} />
      </div>
    );
  }
}
