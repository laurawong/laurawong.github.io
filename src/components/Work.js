import React, { Component } from 'react';
import '../styles/InfoContainer.scss';
import '../styles/Work.scss';
import '../styles/fresh-patterns.scss';


class Work extends Component {
  render() {
    return (
      <div className='myWork-container whiteText'>
        <h1 id='myWork' className='textHeader'>My Work</h1>
        <div className='myWork-freshbooks'>
          <h3> 
            <a className="link" href='https://www.freshbooks.com/' target="_blank" rel="noopener noreferrer">FreshBooks </a> - Full Stack Developer Intern
          </h3>
          <div className='textBody-freshbooks textBody'>
            <p>
              This was the position that sparked my interest for web development.
              I was on the Accounting team. We worked on creating logic that modelled accounting accurately.
              You may think accounting is boring... But, our work was surprisingly interesting and challenging.
              I gained a lot front-end experience from creating/enhancing UI components on the web app. I also
              gained back-end experience, working with databases and the underlying logic.
            </p>
            <ul className='myWork-ul'>
              <li>Ember.js</li>
              <li>Python</li>
              <li>Microservices / Docker</li>
            </ul>
          </div>
        </div>
        <div className='myWork-globalrelay'>
          <h3> 
            <a className="link" href='https://www.globalrelay.com/' target="_blank" rel="noopener noreferrer">Global Relay </a> - Software Developer In Test Intern
          </h3>
          <div className='textBody'>
            <p>
              I was on the Big Data team. I worked on automating tests and implementing new features for the 
              reporting application, ensuring the data processing infrastructure was working correctly. 
              I learned a lot about code robustness and writing good tests. I also gained knowledge in data
              management.
            </p>
            <ul className='myWork-ul'>
              <li>Elasticsearch / Kibana </li>
              <li>HDFS</li>
              <li>Kafka</li>
              <li>Flume</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;