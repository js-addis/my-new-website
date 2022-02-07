import React from 'react';
import { Github, LinkedIn, Facebook, GitHub,  } from '@mui/icons-material';
import { Box, Button, styled } from '@mui/material';
import "./Navbar.css";

export default function Navbar() {

    const Resume = styled(Button)(({theme}) => ({
        border: '2px solid pink',
        borderRadius: 0,
        color: 'white',
        fontFamily: 'Questrial',
        opacity: '0%',
        boxShadow: '0 0 5px pink',
        textShadow: '0 0 3px pink',
        textTransform: 'capitalize',
    }))
    
    return(
        <Box className="container">
            <Box className="logo-container">
                <Box className="title">js.addis</Box>
            </Box>
            <Box className="social-media">
                <GitHub className="github" onClick={()=> window.open("https://www.github.com/js-addis", "_blank")}/>
                <i id="stackoverflow" class="fab fa-stack-overflow" onClick={()=> window.open("https://stackoverflow.com/users/13273766/pigeon16", "_blank")}></i>
                <LinkedIn className="linkedIn" onClick={()=> window.open("https://www.linkedin.com/in/jacob-addis-11955414a/", "_blank")}/>
                <Facebook className="facebook" onClick={()=> alert("I'm not ready to put my facebook on display at the moment.")}/>
                <Resume className="resume" onClick={() => window.open("/resume.html", "_blank")}>View Resume</Resume>
            </Box>
        </Box>
        
    )
}