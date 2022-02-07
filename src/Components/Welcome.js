import './Welcome.css';
import React from 'react';
import { Button, styled } from '@mui/material';

export default function Welcome() {
    const Resume = styled(Button)(({theme}) => ({
        [theme.breakpoints.up('sm')]: {
           marginTop: '15px',
           fontSize: '18px',
           marginLeft: '5px',
        },
        border: '2px solid pink',
        borderRadius: 0,
        color: 'white',
        fontSize: '15px',
        fontFamily: 'Questrial',
        boxShadow: '0 0 5px pink',
        textShadow: '0px 0px 3px pink',
        textTransform: 'capitalize',
        marginLeft: '0px',
        opacity: 0,
        animation: 'slideIn2 350ms ease-in-out 6600ms forwards'
    }))
    return(
       <div className="main-container">
            <div className="line1">Hi, I'm</div>
            <div className="line2">Jacob Addis</div>
            <div className="line3">and I built this website to show off my skills.
                              <br/>It's basically just a linktree at the moment,
                              <br/>but other developments are in the works!
                              <br/>Check out my Github and
            </div>
            <Resume onClick={() => window.open("/resume.html", "_blank")}>View My Resume</Resume>
        </div>
        
    )
}