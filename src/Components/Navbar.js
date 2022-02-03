import React from 'react';
import { Github, LinkedIn, Facebook, GitHub } from '@mui/icons-material';
import { Box, Button, styled } from '@mui/material';
import "./Navbar.css";
import StaticLogo from  "./StaticLogo";

export default function Navbar() {

    const Resume = styled(Button)(({theme}) => ({
        border: '2px solid pink',
        borderRadius: 0,
        color: 'pink',
        fontFamily: 'Questrial',
        opacity: '0%',
        boxShadow: '0 0 5px pink',
        textTransform: 'capitalize',
    }))
    
    return(
        <Box className="container">
            <Box className="logo-container">
                <StaticLogo/>
            </Box>
            <Box className="social-media">
                <GitHub className="github"/>
                <LinkedIn className="linkedIn"/>
                <Facebook className="facebook"/>
                <Resume className="resume">View Resume</Resume>
            </Box>
        </Box>
        
    )
}