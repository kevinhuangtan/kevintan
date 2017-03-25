import React, { Component } from 'react';
import image from './headshot.png';
import './App.css';

var MobileDetect = require('mobile-detect');
var mobile = new MobileDetect(window.navigator.userAgent).mobile();

class App extends Component {
  render() {
    return (
      <div>
        <div style={{
            position: 'relative',
            height: mobile ? 450 : 500,
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            fontWeight: 'bold'
          }}>
          <div>
            <img
              className="fadeIn"
              style={{
                width: mobile ? 180 : 280
              }} src={image} />
          </div>
          <div>
            <h1 style={{marginBottom: 10}}>Kevin Tan</h1>
            <p style={{marginTop: 5}}>
              Founder of <u><a target="_blank" href="https://itshappyhour.co">Happy Hour</a></u></p>

          </div>
        </div>
        <br/><br/><br/>
        <hr style={{opacity: .2}}/>
        <br/><br/><br/>
        <div style={{
            textAlign: 'left',
            width: mobile ? 300 : 400,
            margin: '0 auto',
          }}>
          <p>entrepreneur and software engineer</p>
          <p>Yale 2016, BS Physics</p>
          <p>_______</p>
          <p><a target="_blank" href="/resume">resume</a></p>
          <p><a target="_blank" href="mailto:hello@kevintan.me">hello@kevintan.me</a></p>
          <p>_______</p>
          <p><a target="_blank" href="https://github.com/kevinhuangtan">github</a> - react and node 👌🏽</p>
          <p><a target="_blank" href="https://medium.com/@ktizzel">medium</a>  - i like to ✍ about my projects and thoughts!</p>
          <p><a target="_blank" href="https://www.linkedin.com/in/kevinhuangtan">linkedin</a></p>
          <p><a target="_blank" href="https://twitter.com/iamktizzel">twitter</a> - @iamktizzel</p>
          <p><a target="_blank" href="http://vsco.co/iamktizzel/collection/1">vsco</a> - some moody pics</p>
          <p><a target="_blank" href="https://soundcloud.com/kevintan">soundcloud</a> - 🎹 🎸and hip-hop beats</p>
          <br/>
        </div>
        <p style={{
            textAlign:'right',
            opacity: .6,
            margin: 30
          }}>
          © Kevin Tan, 1993 - future
        </p>
      </div>
    );
  }
}

export default App;
