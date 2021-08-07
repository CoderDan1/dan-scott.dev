import styled from "styled-components";


function App() {

  const Container = styled.div`
      min-width: 100vw;
      min-height: 100vh;
      margin: auto;
      padding: 0 10px 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;

      a:link,
      a:visited,
      a:hover {
        text-decoration: none;
        color: #0D8426;
        font-weight:bold;

        &.social {
          color: #7afff2;
        }
      }
  `;

  const Twitter = () => <a className="social" href="https://twitter.com/CoderDan" target="_blank" rel="noreferrer">Twitter</a>
  const LinkedIn = () => <a className="social" href="https://linkedin.com/in/iDanScott" target="_blank" rel="noreferrer">LinkedIn</a>
  const Github = () => <a className="social" href="https://github.com/CoderDan1" target="_blank" rel="noreferrer">Github</a>

  return (

    <Container>
      <div>
        <h1>Dan Scott</h1>
        <p>Software Engineer based in Bristol</p>
        <p>Currently making some dope software for <a href="https://ovoenergy.com" target="_blank" rel="noreferrer">OVO Energy</a></p>
        <p>You can find me on <Twitter></Twitter>, <LinkedIn></LinkedIn> and <Github></Github></p>
      </div>
    </Container>
  );
}

export default App;
