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
`  ::console.log;
  // console.log.bind(console)
`
]
;

@Radium
export default class FunctionBind extends React.Component {
  static actionCount = 0;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);
    return (
      <div style={[this.props.style, styles.slide]}>
        <h1>Function Bind</h1>
        <Snippet source={show.withArray(examplesSource)} />
      </div>
    );
  }
}
