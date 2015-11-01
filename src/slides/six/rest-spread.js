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

const titles = ['Default Params', 'Rest', 'Spread'];
const examplesSource = [
`
function example(name = 'guest', id = uuid.v4()) {

}
`,
`
function appendToArray(arr, ...toAppend) {
  // toAppend is array
}
`,
`
example(4, ...[5, 6, 7], 8);
// example(4, 5, 6, 7, 8);
`
];

@Radium
export default class DefaultRestSpread extends React.Component {
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
        <h1>{show.withArray(titles)}</h1>
        <Snippet source={show.withArray(examplesSource)} />
      </div>
    );
  }
}
