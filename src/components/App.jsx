import styled from "styled-components";
import Intro from "./Intro";
import Navbar from "./Navbar";
import About from './About';
import ExternalLink from './ExternalLink';


function App() {

  const Container = styled.div`
      max-width: 900px;
      margin: auto;

      a { 
        text-decoration: underline;
        /*add those for opera and mozilla support*/
        text-decoration-color: transparent;
        -webkit-text-decoration-color: transparent;
        -moz-text-decoration-color: transparent;
        transition: 0.2s;

        &:hover {
          text-decoration-color: rgba(220, 205, 121, 1);
          -webkit-text-decoration-color: rgba(220, 205, 121, 1);
          -moz-text-decoration-color: rgba(220, 205, 121, 1);
        }
      }

      a, a:visited, a:hover, a:active {

        &:not(.nav-link) {
          color: rgba(220, 205, 121, 1);
        }
      }
  `;

  const Section = styled.article`
    margin: 20px 0 20px 0;
  `;

  return (
    <Container>
      <Navbar />
      <Intro />
      <Section>
        <About />
      </Section>
      <Section>
        <ul>
          <li><ExternalLink link="https://twitter.com/CoderDan">.twitter()</ExternalLink></li>
          <li><ExternalLink link="https://github.com/CoderDan1">.github()</ExternalLink></li>
          <li><ExternalLink link="https://linkedin.com/in/iDanScott">.linkedin()</ExternalLink></li>
          <li><ExternalLink link="mailto:danscottsoft@gmail.com">.email()</ExternalLink></li>
        </ul>
      </Section> 
      <h4>disclaimer: this site is a work in progress</h4>
    </Container>
  );
}

export default App;
