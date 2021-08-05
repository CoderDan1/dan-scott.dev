import styled from 'styled-components';

const PreText = styled.p`
    font-size: 1rem;
    margin: 0;
`;

const Title = styled.h1`
    font-size: 3rem;
    margin: 0;
`;

const SubTitle = styled.h2`
    font-size: 2rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
`;

const Summary = styled.div`
    color: rgba(255, 255, 255, 0.6);
`;

const OVOLink = styled.a`
    color: rgba(10, 152, 40, 1) !important;

    &:visited, &:hover, &:active {
        color: rgba(10, 152, 40, 1) !important;
        text-decoration-color: rgba(10, 152, 40, 1) !important;
    }
`

const Intro = () => {
    return (
        <>
            <PreText>Hi, my name is</PreText>
            <Title>Dan Scott.</Title>
            <SubTitle>I build things for the web.</SubTitle>
            <Summary>
                I'm a software Engineer creating and enhancing digital experiences on the web. My current gig is building dope software for <OVOLink target="_blank" href="https://ovoenergy.com">OVO Energy</OVOLink> aiding the mission to decarbonise the planet through the use of innovative solutions. 
            </Summary>
        </>
    );
};

export default Intro;
