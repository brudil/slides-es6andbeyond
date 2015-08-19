import React from 'react';
import Radium from 'radium';
import {bindShowHelper} from '../utils';

const styles = {
  rubble: {
    backgroundImage: 'url(img/rubble.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: '#26272a',
    textShadow: '1px 1px 1px rgba(255, 255, 255, 0.8)'
  },
  title: {
    color: '#26272a'
  },
  paragraph: {
    color: '#ffffff',
    textShadow: '2px 2px 1px rgba(30, 30, 30, 0.8)'
  }
};

@Radium
export default class ES4 extends React.Component {
  static actionCount = 2;
  static propTypes = {
    actionIndex: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired
  }

  render() {
    const {actionIndex} = this.props;
    const show = bindShowHelper(actionIndex);

    return (
      <div style={[this.props.style, styles.rubble]}>
        <h1 style={[styles.title]}>Abandoned</h1>
        <p style={[styles.paragraph, show.until(1)]}>Added: optional type annotations, static typing, classes, interfaces, getters/setters, strict mode, tail calls, generators + iterators, destructuring, array comprehensions, rest arguments, namespaces/packages, let/const, early binding</p>
        <p style={[styles.paragraph, show.from(1)]}>
          Yahoo, Microsoft, Google and others formed a committe to start work on ES3.1, based on ES3.
        </p>
        <p style={[styles.paragraph, show.from(2)]}>
          July 2008 compromise was met: ES4's propsoal was superseded by ES Harmony and ES3.1 became ES5.
        </p>
      </div>
    );
  }
}
