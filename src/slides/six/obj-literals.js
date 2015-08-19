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
const obj = {
  username: username


};
`,
`
const obj = {
  username // username: username


};
`,
`
const obj = {
  __proto__: {}

};
`,
`
const obj = {
  greet() {
    return super.greet();
  }
};
`,
`
const key = 'username';
const obj = {
  [key]: 'david'; // username: 'david'
};
`
];


@Radium
export default class ObjectLiterals extends React.Component {
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
        <h1>Object Literals</h1>
        <Snippet source={show.withArray(sourceSteps, 0)} />
      </div>
    );
  }
}
