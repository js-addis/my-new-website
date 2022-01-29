import { useEffect, useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import "./App.css";
import Intro from './Components/Intro';
import WebFont from 'webfontloader';
import SocialMedia from './Components/SocialMedia';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Questrial', 'Nunito', 'Jet Brains Mono', 'Montserrat', 'Poppins Thin']
      }
    });
  })

  return (
    <Box>
      <Intro/>
      <SocialMedia/>
    </Box>
  );
}

export default App; 