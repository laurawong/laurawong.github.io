import React, { Component } from 'react';
import '../styles/About.scss';
import '../styles/InfoContainer.scss';
import '../styles/fresh-patterns.scss';

class About extends Component {
  render() {
    return (
      <div className='aboutMe-container'>
        <div className='paddingBottom--half'>
          <div className='aboutMe-section'>
            <h1 className='textHeader'>About Me</h1>
            <div className='textBody'>
              <p >
                I have always been curious about science. I enjoy figuring out how things work, especially
                if I can tinker or experiment. This curiousty led to my first university major, chemistry. But,
                the lack of opportunities to learn and experiment independently was frustrating.
                During my chemistry research position, I was given a data analysis project and was introduced
                to programming. Soon, I started to enjoy my programming project more than my chemistry project.
                Naturally, I switched my major to computer science and never looked back.
            </p>
            </div>
          </div>
          <div className='aboutMe-section'>
            <h1 className='textHeader'>Education</h1>
            <p className='textBody'>
              Univeristy of British Columbia <br />
              Bsc. Combined Major: Chemistry and Computer Science <br />
              Expected graduation: May 2020
            </p>
          </div>
          <div className='aboutMe-section'>
            <h1 className='textHeader'>Interests</h1>
            <ul className='aboutMe-ul text--base'>
              <li>Hiking</li>
              <li>Bouldering</li>
              <li>Biking</li>
              <li>Corgis</li>
              <li>Green initiatives / Zero waste</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;