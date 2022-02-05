import { useEffect, useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import "./App.css";
import WebFont from 'webfontloader';
import PuppyLogo from './Components/PuppyLogo';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import StaticLogo from './Components/StaticLogo';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Questrial', 'Nunito', 'Jet Brains Mono', 'Montserrat', 'Poppins Thin']
      }
    })
    const App = document.querySelector("html");
    App.style.backgroundColor = "#282828";
    setTimeout(() => {
      App.style.backgroundColor = "#484848";
    }, 4600);
  })

  return (
    <Box>
      <StaticLogo/>
      <PuppyLogo/>
      <Navbar/>
      <Welcome/>
    </Box>
  )
}

export default App; 