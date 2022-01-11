import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticlesComp from '../subComponents/Particles'


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border:2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding:2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display:flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vh);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:First-child{
    margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-soze: calc(0.6em + 1vw);
padding: 0.5rem 0;

${Main}:hover &{
        color:${props => props.theme.body};
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>

            <Box>

                <LogoComponent />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticlesComp theme='light' />

                <Main>
                    <Title>
                        <Design width={40} height={40} /> Graphic Designer
                    </Title>
                    <Description>
                        I like to spend my time making things that speak to anyone while also keeping it simple and minimal.
                    </Description>
                    <Description>
                        <strong>I enjoy designing</strong>
                        <ul>
                            <li>
                                Web Design
                            </li>
                            <li>
                                Visual Art
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>
                                Figma
                            </li>
                            <li>
                                Adobe Software
                            </li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Frontend Developer
                    </Title>
                    <Description>
                        Making new ideas and projects come to life for which I have a passion for is something I love doing.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            Html, Css, Js, React, Bootstrap, Sass, Redux, Tailwind etc.
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>VScode, Github, Repl.io, etc.</p>
                    </Description>
                </Main>
            </Box>

        </ThemeProvider>
    )
}

export default MySkillsPage