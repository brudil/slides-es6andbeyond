import React from 'react';
import Radium from 'radium';
import Highlight from 'react-highlight';

const styles = {
  container: {
    textAlign: 'left'
  }
};

@Radium
export default class Snippet extends React.Component {
  static propTypes = {
    source: React.PropTypes.string.isRequired,
    style: React.PropTypes.object
  }

  render() {
    if (!this.props.source) {
      return null;
    }

    return (
      <div style={[styles.container, this.props.style]}>
        <Highlight>
          {this.props.source.replace(/^\n/, '')}
        </Highlight>
      </div>
    );
  }
}
