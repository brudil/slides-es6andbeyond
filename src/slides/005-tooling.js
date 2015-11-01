import React from 'react';
import Radium from 'radium';
import {bindShowHelper} from '../utils';

const styles = {
  heading: {
    fontSize: '2em'
  },
  subheading: {
    fontSize: '1.1em'
  },
  center: {
    textAlign: 'center'
  },
  babelLogo: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '800px',
    width: '80%'
  },
  babelTweet: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    borderRadius: '5px'
  }
};

@Radium
export default class ECMAStuffContinued extends React.Component {
  static actionCount = 2;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);

    return (
      <div style={this.props.style}>
        <div style={[show.at(0)]}>
          <h1 style={styles.heading}>we're in the future</h1>
          <h2 style={styles.subheading}>tooling makes everything better.</h2>
        </div>
        <div style={[show.at(1)]}>
          <img style={styles.babelLogo} src="img/babel.svg" />
          <h2 style={[styles.subheading, styles.center]}>source to source compiler</h2>
        </div>
        <div style={[show.at(2)]}>
          <img style={[styles.babelTweet]} src="img/babel-tweet.png" />
        </div>
      </div>
    );
  }
}
