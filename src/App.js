import { useEffect, useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import "./App.css";
import WebFont from 'webfontloader';
import PuppyLogo from './Components/PuppyLogo';
import StaticLogo from './Components/StaticLogo.js';
import Navbar from './Components/Navbar';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Questrial', 'Nunito', 'Jet Brains Mono', 'Montserrat', 'Poppins Thin']
      }
    })
    const App = document.querySelector("html");
    App.style.backgroundColor = "black";
    setTimeout(() => {
      App.style.backgroundColor = "grey";
    }, 4600);
  })

  return (
    <Box>
      <PuppyLogo/>
      <Navbar/>
    </Box>
  )
}

export default App; 