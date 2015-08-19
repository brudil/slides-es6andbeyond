import React from 'react';
import Radium from 'radium';

const styles = {
  blockquote: {
    fontSize: '1em',
    background: 'white',
    borderTop: '0.15em solid #00aced',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box',
    padding: '1em'
  },
  tweetContent: {
    color: '#00aced',
    textAlign: 'center'
  },
  tweetMeta: {
    fontSize: '0.5em',
    color: 'rgb(162, 162, 162)',
    textAlign: 'right',
    marginRight: '2em'
  }
};

@Radium
export default class TweetCard extends React.Component {

  render() {
    return (
      <blockquote style={[styles.blockquote]}>
        <p style={[styles.tweetContent]}>{this.props.content}</p>
        <div style={[styles.tweetMeta]}>&mdash; {this.props.author} {this.props.date}</div>
      </blockquote>
    )
  }
}
