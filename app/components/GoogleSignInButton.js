"use client"; // Ensure this is a client-side component

import { Box, Button, Typography, IconButton } from '@mui/material';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/navigation';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import LensIcon from '@mui/icons-material/Lens'; // Alternative to ScanIcon
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'; // Alternative to BrainIcon

const provider = new GoogleAuthProvider();

export default function GoogleSignInButton() {
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push('/'); // Redirect to the home page or pantry tracker page
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#E0D4C0"
      padding={4}
      sx={{ boxSizing: 'border-box' }}
    >
      {/* Hero Section */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#333',
            lineHeight: '1.3',
            mb: 2,
          }}
        >
          <span style={{ color: '#8b4513' }}>Stock</span>
          <span style={{ color: '#d2691e' }}>MASTER</span>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: '1.25rem',
            color: '#555',
            maxWidth: '600px',
            margin: '0 auto',
            mb: 4,
          }}
        >
          Sign in to <strong><span style={{ color: '#8b4513' }}>Stock</span><span style={{ color: '#d2691e' }}>MASTER</span></strong> and start optimizing your inventory with powerful features and insights.
        </Typography>
        <Button
          variant="contained"
          onClick={handleSignIn}
          sx={{
            backgroundColor: 'darkbrown',
            color: '#fff',
            fontWeight: 'bold',
            padding: '12px 24px',
            borderRadius: '8px',
            // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#darkblue',
              boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          Sign in with Google
        </Button>
      </Box>

      {/* Engaging Media */}
      <Box
        mt={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Typography
          variant="h4" // Make this larger
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#333',
            maxWidth: '800px',
            margin: '0 auto',
            mb: 4,
          }}
        >
          Discover the power of <span style={{ color: '#8b4513' }}>Stock</span><span style={{ color: '#d2691e' }}>MASTER</span> with our quick tutorial
        </Typography>
        <IconButton
          component="a"
          href="https://www.youtube.com/watch?v=naTuAz7Z-zQ"
          target="_blank"
          sx={{
            color: '#c4302b',
            fontSize: '3rem',
            '&:hover': {
              color: '#a8272f',
            },
          }}
        >
          <YouTubeIcon />
        </IconButton>
      </Box>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/naTuAz7Z-zQ?si=3OyMP5grRdhiAi7X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      {/* Features Section */}
      <Box
        mt={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: '1.5rem',
            color: '#333',
            mb: 4,
          }}
        >
          Key Features of <span style={{ color: '#8b4513' }}>Stock</span><span style={{ color: '#d2691e' }}>MASTER</span>
        </Typography>
        <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
          <Box
            width="250px"
            p={2}
            m={2}
            bgcolor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          >
            <Typography variant="h6" color="#d2691e" mb={2}>
              <DataUsageIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              Data Visualization
            </Typography>
            <Typography variant="body1" color="#555">
              Visualize your inventory data with interactive charts and graphs to make informed decisions.
            </Typography>
          </Box>
          <Box
            width="250px"
            p={2}
            m={2}
            bgcolor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          >
            <Typography variant="h6" color="#d2691e" mb={2}>
              <LensIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              Easy Scanning
            </Typography>
            <Typography variant="body1" color="#555">
              Quickly scan items to update your inventory and track stock levels with ease.
            </Typography>
          </Box>
          <Box
            width="250px"
            p={2}
            m={2}
            bgcolor="#fff"
            borderRadius="8px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          >
            <Typography variant="h6" color="#d2691e">
              <SettingsSuggestIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
              AI Integration
              
            </Typography>
            <Typography variant="h6" color="#d2691e" >
            
              (Coming Soon)
              
            </Typography>
            <Typography variant="body1" color="#555">
              Leverage AI for predictive analytics and intelligent inventory management solutions.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={2}
        marginTop="auto" // Pushes it to the bottom
        backgroundColor="#E0D4C0"
      >
        <Typography variant="body2" color="#333" textAlign="center">
          No Copyright Ayesha Mahmood © {new Date().getFullYear()}
        </Typography>
    </Box>
    </Box>
  );
}
