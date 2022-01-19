import { useEffect } from 'react';
import { Box, styled, Typography } from '@mui/material';
import './App.css';

const Text = styled(Typography)(({theme}) => ({
}))

function App() {
  useEffect(() => {
    setTimeout(() => {
      const container = document.getElementById("main-container");
      container.remove();
    }, 7300);
  })
  return (
    <div id="main-container">
      <div id="second-container">
        <p id="line-1">npx create-react-app my-new-website</p>
      </div>
    </div>
    
  );
}

export default App;
