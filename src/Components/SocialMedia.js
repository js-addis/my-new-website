import React, { useEffect } from 'react';
import { Box, styled, Transitions } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function SocialMedia() {

    function GitHubIcon(props) {
        const style = {
            "@Keyframes GitHubSlide": {
                from: {
                    opacity: '0%', 
                    transform: "translateY(-50px)" 
                },
                to: { 
                    opacity: '100%'
                }
            },
            animation: 'GitHubSlide 300ms linear 7000ms 1 normal',
            animationFillMode: 'forwards',
            width: '100px',
            height: '100px',
            margin: 'auto',
            opacity: '0%',
        }
        return(
            <GitHub sx={style}/>
        )
    }
    function LinkedInIcon(props) {
        const style = {
            "@Keyframes LinkedInSlide": {
                from: {
                    opacity: '0%', 
                    transform: "translateY(-50px)" 
                },
                to: { 
                    opacity: '100%'
                }
            },
            animation: 'LinkedInSlide 300ms linear 7100ms 1 normal',
            animationFillMode: 'forwards',
            width: '100px',
            height: '100px',
            margin: 'auto',
            opacity: '0%',
        }
        return(
            <LinkedIn sx={style}/>
        )
    }

    const Container = styled(Box)(({theme}) => ({
        position: 'fixed',
        display: 'flex',
        top: '0px',
        width: '30%',
        height: '100px',
        backgroundColor: 'transparent',
    }))

    return(
        <Container>
            <GitHubIcon/>
            <LinkedInIcon/>
        </Container>
    )
}