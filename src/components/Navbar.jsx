import styled from 'styled-components';


const LinkItem = (props) => {
  const Styled = styled.li`
    margin: 0 5px 0 5px;
    display: inline;
  
    a {
      color: rgba(255, 255, 255, 1);
    }

    .method {
      color: rgba(220, 205, 121, 1);
    }
  `;

  return <Styled>
    <a href={`#${props.link}`} className="nav-link">.<span class="method">{props.link}</span>()</a>
  </Styled>
}

const NavBar = () => {

  const Links = styled.ul`
    list-style: none;
    padding: 0;
    text-align: right;
  `;
  return <nav>
    <Links>
      <LinkItem link="about" />
      <LinkItem link="projects" />
      <LinkItem link="contact" />
    </Links>
  </nav>
}

export default NavBar;