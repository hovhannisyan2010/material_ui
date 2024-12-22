import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:"flex",
  justifyContent:"center"
};

const btnstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 150,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const inpstyle = {
  width:200,
  display:"flex",
  flexDirection:"column",
  gap:10,
  alignItems:"center"
};
export default function App() {
  
  const [text,setText] = useState({
    text1:"",
    text2:"",
    text3:"",
  })
  
    function create(event) {
      event.preventDefault()
      if (event.target.text1.value !== "" && event.target.text2.value !== "") {
        if (event.target.text3.value !== "") { 
          setText({
            text1: event.target.text1.value,
            text2: event.target.text2.value,
            text3: event.target.text3.value,
          })
          event.target.text1.value = ""
          event.target.text2.value = ""
          event.target.text3.value = ""
          handleClose()
        }
      }
    }
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={btnstyle}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={create} style={inpstyle}>

              <input style={{border:"1px solid",padding:"5px",borderRadius:"10px"}} type='text' name='text1'/>
              <input style={{border:"1px solid",padding:"5px",borderRadius:"10px"}} type='text' name='text2'/>
              <input style={{border:"1px solid",padding:"5px",borderRadius:"10px"}} type='text' name='text3'/>
              <button type='submit' style={{width:"90px", height:"30px"}}>click</button>
            </form>
          </Typography>
        </Box>
      </Modal>
      <div style={{marginLeft:"10px"}}>
        <h2>{text.text1}</h2>
        <h2>{text.text2}</h2>
        <h2>{text.text3}</h2>
      </div>
    </div>
  );
}