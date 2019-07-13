import React, { Component } from 'react';
import '../styles/Home.scss';
import '../styles/fresh-patterns.scss';
import About from './About'
import Work from './Work'
import Contact from './Contact'
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';

class Home extends Component {
  render() {
    return (
      <div className='landing-container'>
        <div className='landing-image'>
          <div className='landing-header whiteText'>
            <h1 className='landing-name'>LAURA WONG</h1>
            <h2>Learner. Curious. Developer. Dog-lover.</h2>
            <h3>
              I am a motivated learner. Always curious. I love solving
              problems. So naturally, once I started to learn about code, I was hooked.
            </h3>
            <a className='link' href='#myWork'>
              <div className='readMore-container'>
                <h2 className='readMore paddingTop--half'>Read More</h2>
                <div className='arrow'>
                  <FaAngleDoubleDown size={60} />
                </div>
              </div>
            </a>
          </div>
        </div>
        <Work />
        <About />
        <Contact />
      </div>
    );
  }
}

export default Home;