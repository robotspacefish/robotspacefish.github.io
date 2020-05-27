import React from 'react';
import ExternalLink from '../ExternalLink/ExternalLink';
import './About.css';

const About = () => {
  const icon = type => (`fab fa-${type} fa-3x`);

  const renderContent = () => (
    <div className="About__content">
      <div className="About__name-title">
        <h1>Jess Fischbach</h1>
        <h3>Software Engineer</h3>
      </div>
      <hr />
      <div className="About__info">
        <p>Hi, I'm Jess! I'm a software engineer and game dev hobbyist. I have a mix of formal computer science education, self-studying web development, and I recently graduated Flatiron School's software engineering program. I primarily work with JavaScript (love vanilla JS) and Rails for fullstack web development and Lua for games, but I'm always learning and trying out new languages and frameworks whenever I can.</p>

        <p>When I'm not coding I'm spending time with my family (including my two awesome dogs), drawing, playing video games, or thinking about what I want to code next!</p>
      </div>
      <div className='About__social-links'>
        <ExternalLink url="https://github.com/robotspacefish" icon={icon("github-square")} />
        <ExternalLink url="https://www.linkedin.com/in/jess-fischbach/" icon={icon("linkedin")} />
        <ExternalLink url="https://dev.to/robotspacefish" icon={icon("dev")} />
      </div>
    </div>
  );

  return (
    <section className="About">
      {renderContent()}
    </section>
  );
};

export default About;
