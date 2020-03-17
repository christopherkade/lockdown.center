import React from 'react';
import ReactPlayer from 'react-player'

import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

const p5styles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: '-1'
}

function App() {
  return (
    <div>
      <ReactPlayer style={p5styles} width="100%" height="100%" url='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&controls=0&autohide=1&showinfo=0&modestbranding=1' playing />
      <P5Wrapper sketch={sketch}></P5Wrapper>
    </div>
  )
}

export default App;
