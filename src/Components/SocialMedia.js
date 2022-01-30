import React, { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { GitHub, LinkedIn, Facebook } from '@mui/icons-material';

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
            width: '50px',
            height: '50px',
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
            width: '50px',
            height: '50px',
            margin: 'auto',
            opacity: '0%',
        }
        return(
            <LinkedIn sx={style}/>
        )
    }
    function FacebookIcon(props) {
        const style = {
            "@Keyframes FacebookSlide": {
                from: {
                    opacity: '0%', 
                    transform: "translateY(-50px)" 
                },
                to: { 
                    opacity: '100%'
                }
            },
            animation: 'FacebookSlide 300ms linear 7200ms 1 normal',
            animationFillMode: 'forwards',
            width: '50px',
            height: '50px',
            margin: 'auto',
            opacity: '0%',
        }
        return(
            <Facebook sx={style}/>
        )
    }

    const Container = styled(Box)(({theme}) => ({
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        top: '0px',
        width: '25%',
        height: window.innerHeight,
        backgroundColor: 'transparent',
    }))

    return(
        <Container>
            <GitHubIcon/>
            <LinkedInIcon/>
            <FacebookIcon/>
        </Container>
    )
}