import { useState } from "react";
import styled from "styled-components";
import { Animate, AnimateGroup } from "react-simple-animate";

const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    img {
      max-width: 100vw;
    }

    a:link,
    a:visited,
    a:hover {
      text-decoration: none;
      color: #0D8426;
      font-weight:bold;

      &.social {
        color: rgba(91,161,248,1);
      }
    }
`;

const App = () => {

  const [loaded, setLoaded] = useState(false);

  const Twitter = () => <a className="social" href="https://twitter.com/CoderDan" target="_blank" rel="noreferrer">Twitter</a>
  const LinkedIn = () => <a className="social" href="https://linkedin.com/in/iDanScott" target="_blank" rel="noreferrer">LinkedIn</a>
  const Github = () => <a className="social" href="https://github.com/CdrDn" target="_blank" rel="noreferrer">Github</a>

  return (
    <Container>
      <div>
        <AnimateGroup play={loaded}>
          <Animate start={{ opacity: 0, transform: 'translateY(10px)'}} end={{ opacity: 1, transform: 'translateY(0)'}} sequenceIndex={0} duration={1}>
            <img src="/logo-512.png" alt="logo" onLoad={() => setLoaded(true)} />
          </Animate>
          <Animate start={{ opacity: 0, transform: 'translateY(10px)'}} end={{ opacity: 1, transform: 'translateY(0)'}} sequenceIndex={1} duration={1}>
            <p>Something new is on the horizon, watch this space.</p>
          </Animate>
          <Animate start={{ opacity: 0, transform: 'translateY(10px)'}} end={{ opacity: 1, transform: 'translateY(0)'}} sequenceIndex={2} duration={1}>
            <p>You can find me on <Twitter></Twitter>, <LinkedIn></LinkedIn> and <Github></Github></p>
          </Animate>
        </AnimateGroup>
      </div>
    </Container>
  );
}

export default App;
