import ExternalLink from './ExternalLink';

const About = () => {
  return <div>
    <h1 id="about">About Me</h1>
    <p>
      Hello! My name is Dan, and I enjoy poking around with all things tech and building things with code. My interest in Software Development came from a not so well known MMORPG 
      called <ExternalLink link="https://endless-online.com">Endless Online</ExternalLink>. The developers of this game stopped development way back in 2011, so the community created a server 
      emulation project which introduced me to C++ programming concepts from the age of 11.
    </p>
    <p>
      Fast-forward to today, and I've had the priviledge of working at <ExternalLink link="https://wpcsoft.com">an off the shelf product company in the public sector</ExternalLink> 
      , <ExternalLink link="https://bud.co.uk">a small post-startup SASS product</ExternalLink>, <ExternalLink link="https://ovoenergy.com">to a now massive post-startup corporation</ExternalLink>.
    </p>
  </div>
};

export default About;