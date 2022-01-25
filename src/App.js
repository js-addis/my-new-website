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
      width: '17em'
    }
  },
  "@keyframes blinkTextCursor": {
    from: {
      borderRightColor: 'orange'
    },
    to: {
      borderRightColor: 'transparent'
    }
  },
  color: 'lime',
  width: '17em',
  height: 'auto',
  margin: '0 auto',
  borderRight: '2px solid rgba(255,255,255,.75)',
  fontSize: '150%',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  animationIterationCount: 1,
  animation: "typewriter 3500ms steps(44) 1s 1 normal both, blinkTextCursor 500ms steps(44) infinite normal"     
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
  animation: "fadeOut 1500ms linear 5000ms 1 normal",
  height: window.innerHeight,
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
}))

function App() {
  useEffect(() => {
    setTimeout(() => {
      const container = document.getElementById("main-container");
      container.remove();
    }, 6450);
  })
  return (
    <MainContainer id="main-container">
      
      <Text>npx create-react-app my-new-website</Text>
      
    </MainContainer>
  );
}

export default App;
