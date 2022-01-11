import React from 'react'
import styled, { ThemeProvider, keyframes } from 'styled-components'
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

const float = keyframes`
0% {
    transform: translateY(-10px) 
}
50% {
    transform: translateY(15px) translateX(15px) 
}
100% {
    transform: translateY(-10px) 
}
`

const Spaceman = styled.div`
position: absolute;
top: 20%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

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
backdrop-filter: blur(5px);

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

                <Main>
                    I am a front-end developer from Kentucky, USA. I enjoy making simple websites that the user can enjoy.
                    <br />
                    <br />
                    I am interested in frontend stack while trying new things and making new projects. I'm currently in school finishing up a Bachelors degree in Applied Computer Science. I like to watch movies and cook occasionally.
                    <br />
                    <br />
                    As long as it's a passion and you give it your all then nothing can stop you from being great at what you do.
                </Main>
            </Box>

        </ThemeProvider>
    )
}

export default AboutPage