// import { useState } from 'react';
// import { Box, TextField, Button, Typography, Link } from '@mui/material';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useRouter } from 'next/navigation'; // For navigation
// import { auth } from '../../firebase'; // Correct path to firebase configuration

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter(); // For navigation

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       router.push('/'); // Redirect to home page after login
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       height="100vh"
//       padding={2}
//     >
//       <Typography variant="h4" gutterBottom>
//         Login
//       </Typography>
//       {error && <Typography color="error">{error}</Typography>}
//       <TextField
//         label="Email"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <TextField
//         label="Password"
//         type="password"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         onClick={handleLogin}
//         style={{ marginTop: '16px' }}
//       >
//         Login
//       </Button>
//       <Typography variant="body2" style={{ marginTop: '16px' }}>
//         Don't have an account?{' '}
//         <Link href="/auth/signup" underline="hover">
//           Create one
//         </Link>
//       </Typography>
//     </Box>
//   );
// }
// components/LoginPage.js
// app/components/LoginPage.js
// app/components/LoginPage.js
"use client";

import { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Ensure correct import
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/'); // Redirect to pantry or home page
    } catch (error) {
      console.error("Login Failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4">Log In</Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button onClick={handleLogin} variant="contained">
        {loading ? 'Logging In...' : 'Log In'}
      </Button>
    </Box>
  );
}


