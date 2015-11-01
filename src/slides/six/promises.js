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

const source = `
new Promise((resolve, reject) => {})
  .then(answer => {})
  .catch(error => {})
`;

@Radium
export default class APlusPromises extends React.Component {
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
        <h1>Native Promises/A+</h1>
        <Snippet source={source} />
      </div>
    );
  }
}
