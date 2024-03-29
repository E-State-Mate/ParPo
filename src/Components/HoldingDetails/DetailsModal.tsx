import React, { useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import HelpOutlineOutlined from '@mui/icons-material/HelpOutlineOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  export default function DetailsModal(props: any) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  
    return (
      <div>
        <HelpOutlineOutlined onClick={handleOpen} style={{height: '1rem'}}/>
       <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {props.tooltipData}
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }