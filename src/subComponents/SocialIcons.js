import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, Instagram, Twitter } from '../components/AllSvgs'
import { DarkTheme } from '../components/Themes'

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position:fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to="https://github.com/alexandershearer">
                    <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to="https://twitter.com/nuveious">
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to="https://www.instagram.com/nuvelous/">
                    <Instagram width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>

            <Line color={props.theme} />
        </Icons>
    )
}

export default SocialIcons