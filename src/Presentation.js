import React from 'react';
import Mousetrap from 'mousetrap';
import Radium from 'radium';

const styles = {
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    padding: '20px',
    pageBreakAfter: 'always',
    boxSizing: 'border-box',
    fontSize: '6vmin'
  }
};

@Radium
export default class Presentation extends React.Component {
  static propTypes = {
    slides: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
  }

  state = {
    slideIndex: 0,
    actionIndex: 0
  }

  componentWillMount() {
    const [possibleSlideIndex, possibleActionIndex] = window.location.hash.slice(1).split('.');
    const parsedSlideIndex = parseInt(possibleSlideIndex, 10);
    if (parsedSlideIndex >= 0 && parsedSlideIndex < this.props.slides.length) {
      const parsedActionIndex = parseInt(possibleActionIndex, 10);
      if (parsedActionIndex >= 0 && parsedActionIndex <= (this.props.slides[parsedSlideIndex].actionCount || 0)) {
        this.setState({slideIndex: parsedSlideIndex, actionIndex: parsedActionIndex});
      } else {
        this.setState({slideIndex: parsedSlideIndex});
      }
    }
  }

  componentDidMount() {
    Mousetrap.bind(['right', 'd', 'l'], this.handleNext.bind(this));
    Mousetrap.bind(['left', 'a', 'j'], this.handlePrevious.bind(this));

    let totalActions = 0;
    this.props.slides.forEach(slide => totalActions = totalActions + ((slide.actionCount || 0) + 1));
    console.log(`Slides: ${this.props.slides.length}, actions: ${totalActions}`);
  }

  componentWillUpdate(nextProps, nextState) {
    history.replaceState({}, '', `#${nextState.slideIndex}.${nextState.actionIndex}`);
  }

  handleNext() {
    const currentSlide = this.props.slides[this.state.slideIndex];
    if (currentSlide.actionCount > this.state.actionIndex ) {
      this.setState(state => ({actionIndex: state.actionIndex + 1}));
    } else {
      if (this.state.slideIndex >= this.props.slides.length - 1) {
        return;
      }

      this.setState(state => ({slideIndex: state.slideIndex + 1, actionIndex: 0}));
    }
  }

  handlePrevious() {
    const {slideIndex, actionIndex} = this.state;
    const {slides} = this.props;
    if (actionIndex > 0 ) {
      this.setState(state => ({actionIndex: state.actionIndex - 1}));
    } else {
      if (slideIndex <= 0) {
        return;
      }

      const nextSlideActionCount = slides[slideIndex - 1].actionCount || 0;
      this.setState(state => ({slideIndex: state.slideIndex - 1, actionIndex: nextSlideActionCount}));
    }
  }

  render() {
    const Slide = this.props.slides[this.state.slideIndex];
    return (
      <div>
        <Slide actionIndex={this.state.actionIndex} style={styles.slide}/>
      </div>
    );
  }
}
