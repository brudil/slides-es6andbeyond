import React from 'react';
import {Style} from 'radium';
import Presentation from './Presentation.js';
import slideList from './slides';


const styles = {
  body: {
    margin: 0,
    fontFamily: 'Lato, sans-serif'
  },
  html: {
    background: '#2B364A',
    color: '#21A3A3',
    boxSizing: 'border-box',
    borderTop: '5px #7375A5 solid'
  },
  'h1, h2, h3': {
    fontWeight: 'bold',
    margin: '0.1em 0'
  },
  h1: {
    fontSize: '2.5em',
    margin: '0.25em 0',
    color: '#6CF3D5'
  },
  h2: {
    color: '#13C8B5'
  },
  p: {
    margin: '0.5em 0'
  },
  ul: {
   listStyle: 'none'
 }
};


React.render((
  <div>
    <Style rules={styles} />
    <Presentation slides={slideList}/>
  </div>
  ), document.getElementById('app')
);
