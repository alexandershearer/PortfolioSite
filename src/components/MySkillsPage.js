import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'


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

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Title = styled.h2`
display:flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vh);
`

const Description = styled.div`
color: ${props => props.theme.text};
font-soze: calc(0.6em + 1vw);
padding: 0.5rem 0;
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>

            <Box>
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
                </Main>
            </Box>

        </ThemeProvider>
    )
}

export default MySkillsPage