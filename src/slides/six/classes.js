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
    fontSize: '0.8em'
  }
};

const sourceSteps = [
`
class Person {







}
`,
`
class Person {
  constructor(name) {

    this.name = name;
  }




}
`,
`
class Person {
  constructor(name) {

    this.name = name;
  }

  greet() {
    return \`Hey, \${this.name}\`;
  }
}
`,
`
class Person extends LivingThing{
  constructor(name) {
    super();
    this.name = name;
  }

  greet() {
    return \`Hey, \${this.name}\`;
  }
}
`
];


@Radium
export default class ArrowFunctions extends React.Component {
  static actionCount = 4;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);
    return (
      <div style={[this.props.style, styles.slide]}>
        <h1>Classes</h1>
        <Snippet style={styles.snippet} source={show.withArray(sourceSteps, 0)} />
      </div>
    );
  }
}
