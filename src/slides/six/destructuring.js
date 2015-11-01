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
var [a, , b] = [1,2,3];
`,
`function({input, name}) {

}`
];

@Radium
export default class Destructuring extends React.Component {
  static actionCount = 1;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);
    return (
      <div style={[this.props.style, styles.slide]}>
        <h1>Destructuring</h1>
        <Snippet source={show.withArray(examplesSource)} />
      </div>
    );
  }
}
