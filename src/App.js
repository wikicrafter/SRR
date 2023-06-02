import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Resume from './Resume';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme, Button } from '@mui/material';

const App = () => {
  // State to track the current theme
  const [darkTheme, setDarkTheme] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  // Define dark theme
  const darkThemeConfig = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
  });

  // Define light theme
  const lightThemeConfig = createTheme({
    palette: {
      mode: 'light',
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
  });

  // Choose the current theme based on the state
  const theme = darkTheme ? darkThemeConfig : lightThemeConfig;

  // Get the button color based on the theme
  const getButtonColor = () => {
    return darkTheme ? '#000' : '#fff';
  };

  // Get the button background color based on the theme
  const getButtonBackgroundColor = () => {
    return darkTheme ? '#fff' : '#000';
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShowScrollButton(scrollTop > 200); // Show scroll button when scrolled 200 pixels down
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 9999 }}>
        <Button
          variant="contained"
          onClick={toggleTheme}
          style={{
            borderRadius: '50px',
            padding: '0.5rem 1.5rem',
            textTransform: 'none',
            color: getButtonColor(),
            backgroundColor: getButtonBackgroundColor(),
          }}
        >
          {darkTheme ? 'Light' : 'Dark'}
        </Button>
      </div>
      <Resume />
      {showScrollButton && (
        <div
          style={{
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            zIndex: 9999,
          }}
        >
          <Button
            variant="contained"
            onClick={scrollToTop}
            style={{
              borderRadius: '50%',
              padding: '0.5rem',
              textTransform: 'none',
              color: '#fff',
              backgroundColor: '#000',
            }}
          >
             Up
          </Button>
        </div>
      )}
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
