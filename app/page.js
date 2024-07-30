"use client"
import { Box, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import {firestore} from '@/firebase'
import {collection} from 'firebase/firestore'
const item = [
  'pizza',
  'sandwich',
  'shawarma',
  'onion',
  'garlic',
];

export default function Home() {
  useEffect(() =>{
    const updatePantry = async () => {
    const snapshot = query(collection(firestore, 'plentry'))
    const docs = await getDocs(snapshot)
    docs.forEach((doc) => {
      console.log(doc.id,doc.data())
    })
  }
  updatePantry()
 }, [])
  return (
    
    <Box
      width="100vw"
      height="100vh"
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor = "#2B908B"
      flexDirection={'column'}
      
    >
    <Box  border= {'3px solid #333'}>
    <Box width="800px" height="100px" backgroundColor = {"#EFB435"} display = {'flex'} justifyContent = {'center'} alignItems={'center'} border= {'1px solid #333'}>
    <Typography variant = {'h2'} color = {'#333'} textAlign ={'center'}>
      Pantry Items
    </Typography>
    </Box>
      <Stack width="800px" height="300px" spacing={2} overflow="auto" >
        {item.map((i) => (
          <Box
            key={i}
            width="100%"
            height="100px"
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            backgroundColor = {'#f0f0f0'}
          >
            <Typography
              variant={'h3'}
              color={'#333'}
              textAlign={'center'}
            >
              {i.charAt(0).toUpperCase() + i.slice(1)}
            </Typography>
          </Box>
        ))}
      </Stack>
      </Box>
    </Box>
  );
}
