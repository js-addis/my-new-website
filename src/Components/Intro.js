import { useEffect } from 'react';
import { Box, styled, Typography } from '@mui/material';

const Text = styled(Typography)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      fontSize: '100%'
    },
    "@keyframes typewriter": {
      from: {
        width: "0"
      },
      to: {
        width: '17.7em'
      }
    },
    "@keyframes blinkTextCursor": {
      from: {
        borderRightColor: 'darkgrey'
      },
      to: {
        borderRightColor: 'transparent'
      }
    },
    "@keyframes grow": {
      from: { fontSize: '150%' },
      to: { fontSize: '2000%' }
    },
    color: 'darksalmon',
    fontFamily: 'Nunito',
    width: '17em',
    height: 'auto',
    margin: '-3px auto',
    padding: '-3px',
    borderRight: '6px solid darkgrey',
    fontSize: '150%',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textShadow: '0px 0px 1px black',
    animationIterationCount: 1,
    animation: "typewriter 3500ms steps(44) 1s 1 normal both, blinkTextCursor 600ms steps(44) infinite normal, grow 500ms linear 5800ms 1 normal"     
  }));
  const MainContainer = styled(Box)(({theme}) => ({
    "@keyframes fadeOut": {
      from: {
        opacity: '100%',
      },
      to: {
        opacity: '0%',
      }
    },
    animation: "fadeOut 300ms linear 6000ms 1 normal",
    height: window.innerHeight,
    width: '100%',
    margin: '0px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  }))

export default function Intro() {
    useEffect(() => {
        setTimeout(() => {
          const container = document.getElementById("main-container");
          container.remove();
        }, 6250);
    })
    return(
        <MainContainer id="main-container">
            <Text>npx create-react-app my-new-website</Text>
        </MainContainer>
    )
}