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
const meetup = {};
meetup.name = 'WDOTS';
// all good.

meetup = {name: 'Sharks'};
// error!
`;

@Radium
export default class Variables extends React.Component {
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
        <div style={[show.until(2)]}>
          <span style={[show.from(1, {visibility: 'hidden'})]}>(you can)</span>
          <h1 style={styles.heading}>STOP USING VAR</h1>
          <span style={[show.from(1, {visibility: 'hidden'})]}>(if you want to)</span>
        </div>
        <div style={[show.from(2)]}>
          <h1>let & const</h1>
          <p style={[show.at(3)]}>block scoped</p>
          <Snippet style={show.at(4)} source={source} />
        </div>
      </div>
    );
  }
}
