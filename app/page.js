

// "use client";
// import { Box, Stack, Typography, Button, Modal, TextField, Divider, IconButton } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { firestore } from '@/firebase';
// import { collection, doc, getDocs, setDoc, query, deleteDoc, getDoc } from 'firebase/firestore';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import PantryChart from './PantryChart';
// const imageSrc = '/out-of-stock.png';
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'white',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
//   display: 'flex',
//   flexDirection: 'column',
//   gap: 3,
// };

// export default function Home() {
//   const [pantry, setPantry] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [itemName, setItemName] = useState('');
//   const [itemQuantity, setItemQuantity] = useState(1);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleOpen = () => {
//     setItemName('');
//     setItemQuantity(1);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const updatePantry = async () => {
//     const snapshot = query(collection(firestore, 'plentry'));
//     const docs = await getDocs(snapshot);
//     const pantryList = [];
//     docs.forEach((doc) => {
//       pantryList.push({ name: doc.id, ...doc.data() });
//     });
//     setPantry(pantryList);
//   };

//   useEffect(() => {
//     updatePantry();
//   }, []);

//   const addItem = async (item, quantity) => {
//     const docRef = doc(collection(firestore, 'plentry'), item);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const { count } = docSnap.data();
//       await setDoc(docRef, { count: count + quantity });
//     } else {
//       await setDoc(docRef, { count: quantity });
//     }
//     await updatePantry();
//   };

//   const removeItem = async (item, quantity) => {
//     const docRef = doc(collection(firestore, 'plentry'), item);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const { count } = docSnap.data();
//       if (count <= quantity) {
//         await deleteDoc(docRef);
//       } else {
//         await setDoc(docRef, { count: count - quantity });
//       }
//     }
//     await updatePantry();
//   };

//   const handleQuantityChange = async (item, operation) => {
//     const docRef = doc(collection(firestore, 'plentry'), item);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const { count } = docSnap.data();
//       if (operation === 'increase') {
//         await setDoc(docRef, { count: count + 1 });
//       } else if (operation === 'decrease' && count > 1) {
//         await setDoc(docRef, { count: count - 1 });
//       }
//       await updatePantry();
//     }
//   };

//   const handleAddItem = async () => {
//     if (itemName && itemQuantity > 0) {
//       await addItem(itemName, itemQuantity);
//       handleClose();
//     }
//   };

//   const filteredPantry = pantry.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Box
//       width="100vw"
//       height="100vh"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       backgroundColor="#E0D4C0  "
//       // #faf3e0
//     >
//  <Typography
//   variant="title"
//   sx={{
//     position: 'absolute',
//     top: '0',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     margin: '20px',
//   }}
// >
//   <span style={{ color: '#8b4513' }}>Stock</span>
//   <span style={{ color: ' #d2691e' }}>MASTER</span>

// </Typography>
// <Typography
//   variant="h1"
//   sx={{
//     position: 'absolute',
//     top: '80px', // Adjust this value as needed
//     left: '50%',
//     transform: 'translateX(-50%)',
//     fontSize: '1.2rem',
//     fontWeight: 'normal',
//     margin: '10px',
//     textAlign: 'center',
//     color: '#000',
//     fontWeight: 'bold',
//   }}
// >
//   Log your pantry items and visualize your stock levels with ease. <br />
//   Start by adding items to your pantry and see the chart update automatically!
// </Typography>






      

//           <Box
//         width="800px"
//         height ="650px"
//         border="2px solid black"
//         borderRadius="12px"
//         padding={0}
//         display="flex"
//         flexDirection="column"
//         backgroundColor="#ebe3d4"
//         gap={2}
//         marginRight= "30px"
//         style={{ position: 'relative' }}
//       >
      
       
//       <PantryChart pantryData={pantry} />

       
//       </Box>

//       <Box
//         width="800px"
//         border="2px solid #d4b990"
//         borderRadius="12px"
//         padding={0}
//         display="flex"
//         flexDirection="column"
//         backgroundColor="#ebe3d4"
//         gap={2}
//         border="2px solid black"
//       >
      
//         <Box
//           width="100%"
//           height="100px"
//           backgroundColor="#d4b990"
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           borderRadius="12px 12px 0 0"
//           padding={4}
//           // border="2px solid black"
//         >
//           <Typography variant="h2" color="black" textAlign="center" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
//             Pantry Items
//           </Typography>
//           <Button
//             variant="contained"
//             onClick={handleOpen}
//             sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
//           >
//             Add Item
//           </Button>
//         </Box>

//         <TextField
//           label="Search items . . ."
//           variant="outlined"
//           fullWidth
//           sx={{
//             margin: '20px auto',
//             maxWidth: '700px',
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': {
//                 borderColor: '#d4b990',
//               },
//               '&:hover fieldset': {
//                 borderColor: '#d4b990',
//               },
//               '&.Mui-focused fieldset': {
//                 borderColor: '#d4b990',
//               },
//             },
//             '& .MuiInputLabel-root': {
//               color: 'darkbrown',
//             },
//             '& .MuiInputLabel-root.Mui-focused': {
//               color: 'black',
//             },
//           }}
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />

//         <Box
//           width="100%"
//           minHeight="100px"
//           display="flex"
//           justifyContent="space-between"
//           padding={2}
//           alignItems="center"
//           backgroundColor="#ebe3d4"
//           paddingX={5}
//         >
//           <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
//             Food
//           </Typography>
//           <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
//             Quantity
//           </Typography>
//           <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
//             Actions
//           </Typography>
//         </Box>

//         <Stack width="100%" height="300px" overflow="auto" divider={<Divider orientation="horizontal" flexItem sx={{ borderColor: '#d4b990' }} />}>
//           {filteredPantry.length > 0 ? (
//             filteredPantry.map(({ name, count }) => (
//               <Box
//                 key={name}
//                 width="100%"
//                 minHeight="100px"
//                 display="flex"
//                 justifyContent="space-between"
//                 padding={2}
//                 alignItems="center"
//                 backgroundColor="#ebe3d4"
//                 paddingX={5}
//               >
//                 <Typography variant="h5" color="#333" textAlign="center">
//                   {name.charAt(0).toUpperCase() + name.slice(1)}
//                 </Typography>
//                 <Typography variant="h5" color="#333" textAlign="center">
//                   {count}
//                 </Typography>
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <IconButton onClick={() => handleQuantityChange(name, 'decrease')}>
//                     <RemoveIcon />
//                   </IconButton>
//                   <IconButton onClick={() => handleQuantityChange(name, 'increase')}>
//                     <AddIcon />
//                   </IconButton>
//                   <Button
//                     variant="contained"
//                     sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
//                     onClick={() => removeItem(name, count)}
//                   >
//                     Remove
//                   </Button>
//                 </Stack>
//               </Box>
//             ))
//           ) : (
//             <Box
//               width="100%"
//               minHeight="300px"
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               padding={2}
//               backgroundColor="#ebe3d4"
//               paddingX={5}
//             >
//               <Stack>
//                 <img src={imageSrc} alt="Out of Stock" style={{ width: '200px', height: '200px' }} />
//                 <Typography variant="h5" color="#333" textAlign="center">
//                   Out Of Stock : (
//                 </Typography>
//               </Stack>
//             </Box>
//           )}
//         </Stack>
//       </Box>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2" color="black" fontFamily={'Playfair Display'}>
//             Add New Item
//           </Typography>
//           <TextField
//             label="Item Name"
//             variant="outlined"
//             fullWidth
//             value={itemName}
//             onChange={(e) => setItemName(e.target.value)}
//           />
//           <TextField
//             label="Quantity"
//             variant="outlined"
//             fullWidth
//             type="number"
//             value={itemQuantity}
//             onChange={(e) => setItemQuantity(Number(e.target.value))}
//             InputProps={{ inputProps: { min: 1 } }} // Prevents negative quantities
//           />
//           <Button
//             variant="contained"
//             onClick={handleAddItem}
//             sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
//           >
//             Add Item
//           </Button>
//           <Button
//             variant="contained"
//             onClick={handleClose}
//             sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
//           >
//             Cancel
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// }
// app/page.js
// "use client";

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Box, Stack, Typography, Button, Modal, TextField, Divider, IconButton } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import PantryChart from './PantryChart';
// import { firestore } from '@/firebase';
// import { collection, doc, getDocs, setDoc, query, deleteDoc, getDoc } from 'firebase/firestore';
// import { useAuth } from './components/AuthContext'; // Adjust the path as necessary

// const imageSrc = '/out-of-stock.png';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'white',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
//   display: 'flex',
//   flexDirection: 'column',
//   gap: 3,
// };

// export default function Home() {
//   const router = useRouter();
//   const { user, signOut } = useAuth(); // Use authentication context
//   const [pantry, setPantry] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [itemName, setItemName] = useState('');
//   const [itemQuantity, setItemQuantity] = useState(1);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     if (!user) {
//       router.push('/auth/login'); // Redirect to login if not authenticated
//     } else {
//       updatePantry(); // Fetch pantry items if authenticated
//     }
//   }, [user, router]);

//   const handleOpen = () => {
//     setItemName('');
//     setItemQuantity(1);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const updatePantry = async () => {
//     const snapshot = query(collection(firestore, 'plentry'));
//     const docs = await getDocs(snapshot);
//     const pantryList = [];
//     docs.forEach((doc) => {
//       pantryList.push({ name: doc.id, ...doc.data() });
//     });
//     setPantry(pantryList);
//   };

//   const addItem = async (item, quantity) => {
//     const docRef = doc(collection(firestore, 'plentry'), item);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const { count } = docSnap.data();
//       await setDoc(docRef, { count: count + quantity });
//     } else {
//       await setDoc(docRef, { count: quantity });
//     }
//     await updatePantry();
//   };

//   const removeItem = async (item, quantity) => {
//     const docRef = doc(collection(firestore, 'plentry'), item);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const { count } = docSnap.data();
//       if (count <= quantity) {
//         await deleteDoc(docRef);
//       } else {
//         await setDoc(docRef, { count: count - quantity });
//       }
//     }
//     await updatePantry();
//   };

//   const handleQuantityChange = async (item, operation) => {
//     const docRef = doc(collection(firestore, 'plentry'), item);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const { count } = docSnap.data();
//       if (operation === 'increase') {
//         await setDoc(docRef, { count: count + 1 });
//       } else if (operation === 'decrease' && count > 1) {
//         await setDoc(docRef, { count: count - 1 });
//       }
//       await updatePantry();
//     }
//   };

//   const handleAddItem = async () => {
//     if (itemName && itemQuantity > 0) {
//       await addItem(itemName, itemQuantity);
//       handleClose();
//     }
//   };

//   const filteredPantry = pantry.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleLogout = async () => {
//     try {
//       await signOut();
//       router.push('/auth/login');
//     } catch (error) {
//       console.error("Logout failed", error);
//     }
//   };

//   return (
//     <Box
//       width="100vw"
//       height="100vh"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       backgroundColor="#E0D4C0"
//     >
//       <Button
//         variant="contained"
//         onClick={handleLogout}
//         sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold', position: 'absolute', top: '20px', right: '20px' }}
//       >
//         Logout
//       </Button>

//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         flexDirection="column"
//       >
//         <Typography
//           variant="title"
//           sx={{
//             fontSize: '2rem',
//             fontWeight: 'bold',
//             margin: '20px',
//           }}
//         >
//           <span style={{ color: '#8b4513' }}>Stock</span>
//           <span style={{ color: '#d2691e' }}>MASTER</span>
//         </Typography>

//         <Typography
//           variant="h1"
//           sx={{
//             fontSize: '1.2rem',
//             fontWeight: 'normal',
//             margin: '10px',
//             textAlign: 'center',
//             color: '#000',
//             fontWeight: 'bold',
//           }}
//         >
//           Log your pantry items and visualize your stock levels with ease. <br />
//           Start by adding items to your pantry and see the chart update automatically!
//         </Typography>

//         <Box
//           width="800px"
//           height="650px"
//           border="2px solid black"
//           borderRadius="12px"
//           padding={0}
//           display="flex"
//           flexDirection="column"
//           backgroundColor="#ebe3d4"
//           gap={2}
//           margin="30px 0"
//         >
//           <PantryChart pantryData={pantry} />
//         </Box>

//         <Box
//           width="800px"
//           border="2px solid #d4b990"
//           borderRadius="12px"
//           padding={0}
//           display="flex"
//           flexDirection="column"
//           backgroundColor="#ebe3d4"
//           gap={2}
//           border="2px solid black"
//         >
//           <Box
//             width="100%"
//             height="100px"
//             backgroundColor="#d4b990"
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             borderRadius="12px 12px 0 0"
//             padding={4}
//           >
//             <Typography variant="h2" color="black" textAlign="center" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
//               Pantry Items
//             </Typography>
//             <Button
//               variant="contained"
//               onClick={handleOpen}
//               sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
//             >
//               Add Item
//             </Button>
//           </Box>

//           <TextField
//             label="Search items . . ."
//             variant="outlined"
//             fullWidth
//             sx={{
//               margin: '20px auto',
//               maxWidth: '700px',
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: '#d4b990',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#d4b990',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#d4b990',
//                 },
//               },
//               '& .MuiInputLabel-root': {
//                 color: 'darkbrown',
//               },
//               '& .MuiInputLabel-root.Mui-focused': {
//                 color: 'black',
//               },
//             }}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />

//           <Box
//             width="100%"
//             minHeight="100px"
//             display="flex"
//             justifyContent="space-between"
//             padding={2}
//             alignItems="center"
//             backgroundColor="#ebe3d4"
//             paddingX={5}
//           >
//             <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
//               Food
//             </Typography>
//             <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
//               Quantity
//             </Typography>
//             <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
//               Actions
//             </Typography>
//           </Box>

//           <Stack width="100%" height="300px" overflow="auto" divider={<Divider orientation="horizontal" flexItem sx={{ borderColor: '#d4b990' }} />}>
//             {filteredPantry.length > 0 ? (
//               filteredPantry.map(({ name, count }) => (
//                 <Box
//                   key={name}
//                   width="100%"
//                   minHeight="100px"
//                   display="flex"
//                   justifyContent="space-between"
//                   padding={2}
//                   alignItems="center"
//                   backgroundColor="#ebe3d4"
//                   paddingX={5}
//                 >
//                   <Typography variant="h5" color="#333" textAlign="center">
//                     {name.charAt(0).toUpperCase() + name.slice(1)}
//                   </Typography>
//                   <Typography variant="h5" color="#333" textAlign="center">
//                     {count}
//                   </Typography>
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <IconButton onClick={() => handleQuantityChange(name, 'decrease')}>
//                       <RemoveIcon />
//                     </IconButton>
//                     <IconButton onClick={() => handleQuantityChange(name, 'increase')}>
//                       <AddIcon />
//                     </IconButton>
//                     <Button
//                       variant="contained"
//                       sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
//                       onClick={() => removeItem(name, count)}
//                     >
//                       Remove
//                     </Button>
//                   </Stack>
//                 </Box>
//               ))
//             ) : (
//               <Box
//                 width="100%"
//                 minHeight="300px"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 padding={2}
//                 backgroundColor="#ebe3d4"
//                 paddingX={5}
//               >
//                 <Stack>
//                   <img src={imageSrc} alt="Out of Stock" style={{ width: '200px', height: '200px' }} />
//                   <Typography variant="h5" color="#333" textAlign="center">
//                     Out Of Stock : (
//                   </Typography>
//                 </Stack>
//               </Box>
//             )}
//           </Stack>
//         </Box>
//       </Box>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2" color="black" fontFamily={'Playfair Display'}>
//             Add New Item
//           </Typography>
//           <TextField
//             label="Item Name"
//             variant="outlined"
//             fullWidth
//             value={itemName}
//             onChange={(e) => setItemName(e.target.value)}
//           />
//           <TextField
//             label="Quantity"
//             variant="outlined"
//             fullWidth
//             type="number"
//             value={itemQuantity}
//             onChange={(e) => setItemQuantity(Number(e.target.value))}
//             InputProps={{ inputProps: { min: 1 } }} // Prevents negative quantities
//           />
//           <Button
//             variant="contained"
//             onClick={handleAddItem}
//             sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
//           >
//             Add Item
//           </Button>
//           <Button
//             variant="contained"
//             onClick={handleClose}
//             sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
//           >
//             Cancel
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// }
"use client"
import { Box, Stack, Typography, Button, Modal, TextField, Divider, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { firestore } from '@/firebase';
import { collection, doc, getDocs, setDoc, query, deleteDoc, getDoc } from 'firebase/firestore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PantryChart from './PantryChart';
import { useRouter } from 'next/navigation';
import { useAuth } from './components/AuthContext'; // Adjust the path as necessary

const imageSrc = '/out-of-stock.png';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
};

export default function Home() {
  const [pantry, setPantry] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();
  const { user, signOut } = useAuth(); // Adjust the path if necessary

  const handleOpen = () => {
    setItemName('');
    setItemQuantity(1);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updatePantry = async () => {
    const snapshot = query(collection(firestore, 'plentry'));
    const docs = await getDocs(snapshot);
    const pantryList = [];
    docs.forEach((doc) => {
      pantryList.push({ name: doc.id, ...doc.data() });
    });
    setPantry(pantryList);
  };

  useEffect(() => {
    updatePantry();
  }, []);

  const addItem = async (item, quantity) => {
    const docRef = doc(collection(firestore, 'plentry'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { count } = docSnap.data();
      await setDoc(docRef, { count: count + quantity });
    } else {
      await setDoc(docRef, { count: quantity });
    }
    await updatePantry();
  };

  const removeItem = async (item, quantity) => {
    const docRef = doc(collection(firestore, 'plentry'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { count } = docSnap.data();
      if (count <= quantity) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { count: count - quantity });
      }
    }
    await updatePantry();
  };

  const handleQuantityChange = async (item, operation) => {
    const docRef = doc(collection(firestore, 'plentry'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { count } = docSnap.data();
      if (operation === 'increase') {
        await setDoc(docRef, { count: count + 1 });
      } else if (operation === 'decrease' && count > 1) {
        await setDoc(docRef, { count: count - 1 });
      }
      await updatePantry();
    }
  };

  const handleAddItem = async () => {
    if (itemName && itemQuantity > 0) {
      await addItem(itemName, itemQuantity);
      handleClose();
    }
  };

  const filteredPantry = pantry.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  useEffect(() => {
    if (!user) {
      router.push('/auth/login'); // Redirect to login if not authenticated
    }
  }, [user, router]);
  
  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/auth/login');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#E0D4C0" // Adjusted background color
    >
       <Button
        variant="contained"
        onClick={handleLogout}
        sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold', position: 'absolute', top: '20px', right: '20px' }}
      >Logout
      </Button>
   
      <Typography
        variant="title"
        sx={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '2rem',
          fontWeight: 'bold',
          margin: '20px',
        }}
      >
        <span style={{ color: '#8b4513' }}>Stock</span>
        <span style={{ color: ' #d2691e' }}>MASTER</span>
      </Typography>
      
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '1.2rem',
          fontWeight: 'normal',
          margin: '10px',
          textAlign: 'center',
          color: '#000',
          fontWeight: 'bold',
        }}
      >
        Log your pantry items and visualize your stock levels with ease. <br />
        Start by adding items to your pantry and see the chart update automatically!
      </Typography>
      
      <Box
        width="800px"
        height="650px"
        border="2px solid black"
        borderRadius="12px"
        padding={0}
        display="flex"
        flexDirection="column"
        backgroundColor="#ebe3d4"
        gap={2}
        marginRight="30px"
        style={{ position: 'relative' }}
      >
        <PantryChart pantryData={pantry} />
      </Box>

      <Box
        width="800px"
        border="2px solid black" // Border to match header section
        borderRadius="12px"
        padding={0}
        display="flex"
        flexDirection="column"
        backgroundColor="#ebe3d4"
        gap={2}
      >
        <Box
          width="100" // Full width
          minHeight="100px"
          backgroundColor="#d4b990"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="12px 12px 0 0"
          padding={4}
          borderBottom="2px solid black" // Border to match box below
        >
          <Typography variant="h2" color="black" textAlign="center" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
            Pantry Items
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
          >
            Add Item
          </Button>
        </Box>

        <TextField
          label="Search items . . ."
          variant="outlined"
          fullWidth
          sx={{
            margin: '20px auto',
            maxWidth: '700px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#d4b990',
              },
              '&:hover fieldset': {
                borderColor: '#d4b990',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#d4b990',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'darkbrown',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black',
            },
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Box
          width="100" // Ensure it matches the width of the header
          minHeight="100px"
          display="flex"
          justifyContent="space-between"
          padding={2}
          alignItems="center"
          backgroundColor="#ebe3d4"
          paddingX={5}
          borderBottom="2px solid black" // Border to match header section
        >
          <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
            Food
          </Typography>
          <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
            Quantity
          </Typography>
          <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
            Actions
          </Typography>
        </Box>

        <Stack width="800px" height="300px" overflow="auto" divider={<Divider orientation="horizontal" flexItem sx={{ borderColor: '#d4b990' }} />}>
          {filteredPantry.length > 0 ? (
            filteredPantry.map(({ name, count }) => (
              <Box
                key={name}
                width="100%"
                minHeight="100px"
                display="flex"
                justifyContent="space-between"
                padding={2}
                alignItems="center"
                backgroundColor="#ebe3d4"
                paddingX={5}
              >
                <Typography variant="h5" color="#333" textAlign="center">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Typography>
                <Typography variant="h5" color="#333" textAlign="center">
                  {count}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton onClick={() => handleQuantityChange(name, 'decrease')}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={() => handleQuantityChange(name, 'increase')}>
                    <AddIcon />
                  </IconButton>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
                    onClick={() => removeItem(name, count)}
                  >
                    Remove
                  </Button>
                </Stack>
              </Box>
            ))
          ) : (
            <Box
              width="100%"
              minHeight="300px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding={2}
              backgroundColor="#ebe3d4"
              paddingX={5}
            >
              <Stack>
                <img src={imageSrc} alt="Out of Stock" style={{ width: '200px', height: '200px' }} />
                <Typography variant="h5" color="#333" textAlign="center">
                  Out Of Stock : (
                </Typography>
              </Stack>
            </Box>
          )}
        </Stack>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color="black" fontFamily={'Playfair Display'}>
            Add New Item
          </Typography>
          <TextField
            label="Item Name"
            variant="outlined"
            fullWidth
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <TextField
            label="Quantity"
            variant="outlined"
            fullWidth
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(Number(e.target.value))}
            InputProps={{ inputProps: { min: 1 } }} // Prevents negative quantities
          />
          <Button
            variant="contained"
            onClick={handleAddItem}
            sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
          >
            Add Item
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
