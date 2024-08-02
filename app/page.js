// "use client"
// import { Box, Stack, Typography, Button, Modal, TextField ,Divider} from '@mui/material'
// import { useEffect, useState } from 'react'
// import { firestore } from '@/firebase'
// import { collection, doc, getDocs, setDoc, query, deleteDoc, getDoc } from 'firebase/firestore'

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
//   const [pantry, setPantry] = useState([])
//   const [open, setOpen] = useState(false)
//   const handleOpen = () => setOpen(true)
//   const handleClose = () => setOpen(false)
//   const [itemName, setItemName] = useState('')

//   const updatePantry = async () => {
//     const snapshot = query(collection(firestore, 'plentry'))
//     const docs = await getDocs(snapshot)
//     const pantryList = []
//     docs.forEach((doc) => {
//       pantryList.push({ name: doc.id, ...doc.data() })
//     })
//     console.log(pantryList)
//     setPantry(pantryList)
//   }

//   useEffect(() => {
//     updatePantry()
//   }, [])

//   const addItem = async (item) => {
//     const docRef = doc(collection(firestore, 'plentry'), item)
//     const docSnap = await getDoc(docRef)
//     if (docSnap.exists()){
//       const {count}= docSnap.data()
//       await setDoc(docRef,{count:count+1})
  

//     }
//     else{
//       await setDoc(docRef, { count: 1 })

//     }
//     await updatePantry()
//   }

//   const removeItem = async (item) => {
//     const docRef = doc(collection(firestore, 'plentry'), item)
//     const docSnap = await getDoc(docRef)
//     if(docSnap.exists()){
//       const{count}=docSnap.data()
//       if(count==1){
//         await deleteDoc(docRef)
//       }else{
//         await setDoc(docRef,{count:count-1})
//       }
//     }

//     await updatePantry()
//   }

//   return (
    
    
//     <Box
//       width="100vw"
//       height="100vh"
//       display={'flex'}
//       justifyContent={'center'}
//       alignItems={'center'}
//       backgroundColor="white"
//       flexDirection={'column'}
//       // gap={2}
//     >
//      {/* <Typography variant="h1" color="black" textAlign="center" mb={2}>
//         Welcome to Your Pantry Manager
//       </Typography>
//       <Typography variant="h2" color="bla" textAlign="center" mb={4}>
//         Easily keep track of your pantry items and their quantities. Add new items or remove items as you use them.
//       </Typography>
//        */}
    
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2" color="black" fontFamily={'Playfair Display'}>
//             Add Item
//           </Typography>
//           <Stack width="100%" direction={'row'} spacing={2}>
//             <TextField
//               id="outlined-basic"
//               label="Search"
//               variant="outlined"
//               fullWidth
//               value={itemName}
//               onChange={(e) => setItemName(e.target.value)}
//             />
//             <Button
//               variant="outlined"
//               onClick={() => {
//                 addItem(itemName)
//                 setItemName('')
//                 handleClose()
//               }}
//             >
//               Add 
//             </Button>
//           </Stack>
//         </Box>
//       </Modal>

//       {/* <Button variant="contained" onClick={handleOpen}>
//         Add Item
//       </Button> */}
//       {/* <Box border={'3px solid #333'}> */}
//         <Box
//           width="800px"
//           height="100px"
//           backgroundColor={"#d4b990"}
//           display={'flex'}
//           justifyContent={'left'}
//           alignItems={'left'}

//           // border={'1px solid #333'}
//           borderRadius= {'12px 12px 0 0'}
//           padding={4}
//         >
//           <Typography variant={'h2'} color={'black'} textAlign={'center'}  sx={{ fontSize: '3rem' , fontWeight: 'bold' }}>
//             Pantry Items
//           </Typography>
//           <Button
//             variant="contained"
//             onClick={handleOpen}
//             sx={{ marginLeft: 'auto', display: 'block' , backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold'}}
           
           
//           >
//           Add Item
//         </Button>
//         </Box>
//         <Stack width="800px" height="300px" overflow="auto"  divider={<Divider orientation="horizontal" flexItem sx={{ borderColor: '#d4b990' }} />}>
//           {pantry.map(({ name, count }) => (
//             <Box
//               key={name}
//               width="100%"
//               minHeight="100px"
//               display={'flex'}
//               justifyContent={'space-between'}
//               padding={2}
//               alignItems={'center'}
//               backgroundColor={'#ebe3d4'}
//               paddingX={5}
              
//             >
//               <Typography variant={'h5'} color={'#333'} textAlign={'center'}>
//                 {name.charAt(0).toUpperCase() + name.slice(1)}

//               </Typography>
             
//               <Typography variant = {'h5'}color ={'#333'}textAlign ={'center'}>
              
//               {count}
//               </Typography>

//               <Button variant="contained" sx={{backgroundColor:'#d4b990'}} onClick={() => removeItem(name)}>Remove</Button>
//             </Box>
//           ))}
//         </Stack>
//       </Box>
//     // </Box>
//   );
// }
// "use client"
// import { Box, Stack, Typography, Button, Modal, TextField, Divider } from '@mui/material'
// import { useEffect, useState } from 'react'
// import { firestore } from '@/firebase'
// import { collection, doc, getDocs, setDoc, query, deleteDoc, getDoc } from 'firebase/firestore'

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
//   const [pantry, setPantry] = useState([])
//   const [open, setOpen] = useState(false)
//   const [itemName, setItemName] = useState('')
//   const [searchQuery, setSearchQuery] = useState('')

//   const handleOpen = () => setOpen(true)
//   const handleClose = () => setOpen(false)

//   const updatePantry = async () => {
//     const snapshot = query(collection(firestore, 'plentry'))
//     const docs = await getDocs(snapshot)
//     const pantryList = []
//     docs.forEach((doc) => {
//       pantryList.push({ name: doc.id, ...doc.data() })
//     })
//     setPantry(pantryList)
//   }

//   useEffect(() => {
//     updatePantry()
//   }, [])

//   const addItem = async (item) => {
//     const docRef = doc(collection(firestore, 'plentry'), item)
//     const docSnap = await getDoc(docRef)
//     if (docSnap.exists()){
//       const {count}= docSnap.data()
//       await setDoc(docRef,{count:count+1})
//     }
//     else{
//       await setDoc(docRef, { count: 1 })
//     }
//     await updatePantry()
//   }

//   const removeItem = async (item) => {
//     const docRef = doc(collection(firestore, 'plentry'), item)
//     const docSnap = await getDoc(docRef)
//     if(docSnap.exists()){
//       const {count} = docSnap.data()
//       if(count === 1){
//         await deleteDoc(docRef)
//       } else {
//         await setDoc(docRef,{count:count-1})
//       }
//     }
//     await updatePantry()
//   }

//   const filteredPantry = pantry.filter(item => 
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   return (
//     <Box
//       width="100vw"
//       height="100vh"
//       display={'flex'}
//       justifyContent={'center'}
//       alignItems={'center'}
//       backgroundColor="white"
//       flexDirection={'column'}
//     >
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2" color="black" fontFamily={'Playfair Display'}>
//             Add Item
//           </Typography>
//           <Stack width="100%" direction={'row'} spacing={2}>
//             <TextField
//               id="outlined-basic"
//               label="Item Name"
//               variant="outlined"
//               fullWidth
//               value={itemName}
//               onChange={(e) => setItemName(e.target.value)}
//             />
//             <Button
//               variant="outlined"
//               onClick={() => {
//                 addItem(itemName)
//                 setItemName('')
//                 handleClose()
//               }}
//             >
//               Add 
//             </Button>
//           </Stack>
//         </Box>
//       </Modal>

//       <Box
//         width="800px"
//         height="100px"
//         backgroundColor={"#d4b990"}
//         display={'flex'}
//         justifyContent={'left'}
//         alignItems={'left'}
//         borderRadius={'12px 12px 0 0'}
//         padding={4}
//       >
//         <Typography variant={'h2'} color={'black'} textAlign={'center'} sx={{ fontSize: '3rem', fontWeight: 'bold' }}>
//           Pantry Items
//         </Typography>
//         <Button
//           variant="contained"
//           onClick={handleOpen}
//           sx={{ marginLeft: 'auto', display: 'block', backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
//         >
//           Add Item
//         </Button>
//       </Box>

//       <TextField
//         label="Search items..."
//         variant="outlined"
//         fullWidth
//         sx={{ margin: '5px', maxWidth: '750px' }}
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />

//       <Stack width="800px" height="300px" overflow="auto" divider={<Divider orientation="horizontal" flexItem sx={{ borderColor: '#d4b990' }} />}>
//         {filteredPantry.map(({ name, count }) => (
//           <Box
//             key={name}
//             width="100%"
//             minHeight="100px"
//             display={'flex'}
//             justifyContent={'space-between'}
//             padding={2}
//             alignItems={'center'}
//             backgroundColor={'#ebe3d4'}
//             paddingX={5}
//           >
//             <Typography variant={'h5'} color={'#333'} textAlign={'center'}>
//               {name.charAt(0).toUpperCase() + name.slice(1)}
//             </Typography>
//             <Typography variant={'h5'} color={'#333'} textAlign={'center'}>
//               {count}
//             </Typography>
//             <Button variant="contained" sx={{backgroundColor:'#d4b990'}} onClick={() => removeItem(name)}>Remove</Button>
//           </Box>
//         ))}
//       </Stack>
//     </Box>
//   );
// }
// "use client"
// import { Box, Stack, Typography, Button, Modal, TextField, Divider } from '@mui/material'
// import { useEffect, useState } from 'react'
// import { firestore } from '@/firebase'
// import { collection, doc, getDocs, setDoc, query, deleteDoc, getDoc } from 'firebase/firestore'

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
//   const [pantry, setPantry] = useState([])
//   const [open, setOpen] = useState(false)
//   const [itemName, setItemName] = useState('')
//   const [searchQuery, setSearchQuery] = useState('')

//   const handleOpen = () => setOpen(true)
//   const handleClose = () => setOpen(false)

//   const updatePantry = async () => {
//     const snapshot = query(collection(firestore, 'plentry'))
//     const docs = await getDocs(snapshot)
//     const pantryList = []
//     docs.forEach((doc) => {
//       pantryList.push({ name: doc.id, ...doc.data() })
//     })
//     setPantry(pantryList)
//   }

//   useEffect(() => {
//     updatePantry()
//   }, [])

//   const addItem = async (item) => {
//     const docRef = doc(collection(firestore, 'plentry'), item)
//     const docSnap = await getDoc(docRef)
//     if (docSnap.exists()){
//       const {count}= docSnap.data()
//       await setDoc(docRef,{count:count+1})
//     }
//     else{
//       await setDoc(docRef, { count: 1 })
//     }
//     await updatePantry()
//   }

//   const removeItem = async (item) => {
//     const docRef = doc(collection(firestore, 'plentry'), item)
//     const docSnap = await getDoc(docRef)
//     if(docSnap.exists()){
//       const {count} = docSnap.data()
//       if(count === 1){
//         await deleteDoc(docRef)
//       } else {
//         await setDoc(docRef,{count:count-1})
//       }
//     }
//     await updatePantry()
//   }

//   const filteredPantry = pantry.filter(item => 
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   return (
//     <Box
//       width="100vw"
//       height="100vh"
//       display={'flex'}
//       justifyContent={'center'}
//       alignItems={'center'}
//       backgroundColor="white"
//       flexDirection={'column'}
//     >
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2" color="black" fontFamily={'Playfair Display'}>
//             Add Item
//           </Typography>
//           <Stack width="100%" direction={'row'} spacing={2}>
//             <TextField
//               id="outlined-basic"
//               label="Item Name"
//               variant="outlined"
//               fullWidth
//               value={itemName}
//               onChange={(e) => setItemName(e.target.value)}
//             />
//             <Button
//               variant="outlined"
//               onClick={() => {
//                 addItem(itemName)
//                 setItemName('')
//                 handleClose()
//               }}
//             >
//               Add 
//             </Button>
//           </Stack>
//         </Box>
//       </Modal>

//       <Box
//         width="800px"
//         height="100px"
//         backgroundColor={"#d4b990"}
//         display={'flex'}
//         justifyContent={'left'}
//         alignItems={'left'}
//         borderRadius={'12px 12px 0 0'}
//         padding={4} 
//         borderColor ={'black'}
//       >
//         <Typography variant={'h2'} color={'black'} textAlign={'center'} sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
//           Pantry Items
//         </Typography>
//         <Button
//           variant="contained"
//           onClick={handleOpen}
//           sx={{ marginLeft: 'auto', display: 'block', backgroundColor: '#d4b990', color: 'black', fontWeight: 'bold' }}
//         >
//           Add Item
//         </Button>
//       </Box>

//       <TextField
//         label="Search items . . ."
//         variant="outlined"
//         fullWidth
//         // sx={{ margin: '20px', maxWidth: '800px'}}
//         sx={{
//     margin: '20px',
//     maxWidth: '700px',
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: '#d4b990', // Default border color
//       },
//       '&:hover fieldset': {
//         borderColor: '#d4b990', // Border color when hovering
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#d4b990', // Border color when focused
//       },
//     },
//     '& .MuiInputLabel-root': {
//       color: 'darkbrown', // Label color
//       fontWeight: '2px'
//     },
//     '& .MuiInputLabel-root.Mui-focused': {
//       color: 'black', // Label color when focused
//     },
//   }}
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />

//       <Stack width="800px" height="300px" overflow="auto" divider={<Divider orientation="horizontal" flexItem sx={{ borderColor: '#d4b990' }} />}>
//         {filteredPantry.length > 0 ? (
//           filteredPantry.map(({ name, count }) => (
//             <Box
//               key={name}
//               width="100%"
//               minHeight="100px"
//               display={'flex'}
//               justifyContent={'space-between'}
//               padding={2}
//               alignItems={'center'}
//               backgroundColor={'#ebe3d4'}
//               paddingX={5}
//             >
//               <Typography variant={'h5'} color={'#333'} textAlign={'center'}>
//                 {name.charAt(0).toUpperCase() + name.slice(1)}
//               </Typography>
//               <Typography variant={'h5'} color={'#333'} textAlign={'center'}>
//                 {count}
//               </Typography>
//               <Button variant="contained" sx={{backgroundColor:'#d4b990'}} onClick={() => removeItem(name)}>Remove</Button>
//             </Box>
//           ))
//         ) : (
//           <Box
//             width="100%"
//             minHeight="300px"
//             display={'flex'}
//             justifyContent={'center'}
//             alignItems={'center'}
//             padding={2}
//             backgroundColor={'#ebe3d4'}
//             paddingX={5}
//           >
//             <Typography variant={'h5'} color={'#333'} textAlign={'center'}>
//               No items in pantry
//             </Typography>
//           </Box>
//         )}
//       </Stack>
//     </Box>
    
//   );
// }

"use client"
import { Box, Stack, Typography, Button, Modal, TextField, Divider } from '@mui/material'
import { useEffect, useState } from 'react'
import { firestore } from '@/firebase'
import { collection, doc, getDocs, setDoc, query, deleteDoc, getDoc } from 'firebase/firestore'

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
  const [pantry, setPantry] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const updatePantry = async () => {
    const snapshot = query(collection(firestore, 'plentry'))
    const docs = await getDocs(snapshot)
    const pantryList = []
    docs.forEach((doc) => {
      pantryList.push({ name: doc.id, ...doc.data() })
    })
    setPantry(pantryList)
  }

  useEffect(() => {
    updatePantry()
  }, [])

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'plentry'), item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
      const {count}= docSnap.data()
      await setDoc(docRef,{count:count+1})
    }
    else{
      await setDoc(docRef, { count: 1 })
    }
    await updatePantry()
  }

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'plentry'), item)
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()){
      const {count} = docSnap.data()
      if(count === 1){
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef,{count:count-1})
      }
    }
    await updatePantry()
  }

  const filteredPantry = pantry.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
    >
      <Box
        width="800px"
        border="2px solid #d4b990"  // Border around the entire content
        borderRadius="12px"
        padding={0}
        display="flex"
        flexDirection="column"
        backgroundColor = '#ebe3d4'
        gap={2}
      >
        <Box
          width="100%"
          height="100px"
          backgroundColor="#d4b990"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="12px 12px 0 0 "
          padding={4}
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
                borderColor: '#d4b990', // Default border color
              },
              '&:hover fieldset': {
                borderColor: '#d4b990', // Border color when hovering
              },
              '&.Mui-focused fieldset': {
                borderColor: '#d4b990', // Border color when focused
              },
            },
            '& .MuiInputLabel-root': {
              color: 'darkbrown', // Label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black', // Label color when focused
            },
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <Stack direction="row" spacing={2} alignItems="center" width="100%" mb={2} padding = {2} >
        <Typography variant="h6" color="black">
          Food
        </Typography>
        <Typography variant="h6" color="black">
          Quantity
        </Typography>
      </Stack> */}
      {/* <Stack width="100%" direction="row" spacing={2}>
      <Typography variant="h6" color="black">
          Food
        </Typography>
        <Typography variant="h6" color="black">
          Quantity
        </Typography>
            </Stack> */}
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
                <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
                  Food
                </Typography>
                <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
                 Quantity
                </Typography>
                <Typography variant="h5" color="#333" textAlign="center" fontWeight="bold">
                 X
                </Typography>
           
              </Box>

        <Stack width="100%" height="300px" overflow="auto" divider={<Divider orientation="horizontal" flexItem sx={{ borderColor: '#d4b990' }} />}>
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
                <Button variant="contained" sx={{ backgroundColor: '#d4b990', color: 'black', fontWeight:'bold' }} onClick={() => removeItem(name)}>Remove</Button>
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
              <Typography variant="h5" color="#333" textAlign="center">
                No items in pantry
              </Typography>
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
            Add Item
          </Typography>
          <Stack width="100%" direction="row" spacing={2}>
            <TextField
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Button
              variant="outlined"
              onClick={() => {
                addItem(itemName)
                setItemName('')
                handleClose()
              }}
            >
              Add 
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  )
}
