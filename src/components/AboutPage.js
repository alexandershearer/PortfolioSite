import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'


import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticlesComp from '../subComponents/Particles'

import astronaut from '../assets/Images/astronaut.png'


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;

img{
    width: 100%;
    height: auto;
}
`

const Main = styled.div`
border:2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding:2rem;
width: 50vw;
height: 60vh;
z-index:3;
line-height: 1.5;
display:flex;
justify-content-center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter:blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono',monospace;
font-style: italic;

}
`



const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>

            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticlesComp theme='dark' />


                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
            </Box>

        </ThemeProvider>
    )
}

export default AboutPage