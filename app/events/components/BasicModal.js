/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LearnButton from './LearnButton';
import { Jost } from 'next/font/google';


// couldnt figure out the file pathToString, copied this into the events folder
import localFont from "next/font/local"
import { urlForImage } from '@/sanity/lib/image';

const fabulous = localFont({
  src: '/static-fonts/fabulous.otf',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600'], 
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#373737',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: 600,
};

export default function BasicModal({title, date, time, location, description, imageUrl}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      {/* <LearnButton onClick={handleOpen} /> */}

      <div class="flex flex-row m-auto justify-center">
        <div class="flex flex-row m-auto justify-center">
        <button onClick={handleOpen} class="text-[#FFFFFF] font-sans text-lg font-light">Learn More </button>
        <img src="/arrowup.png" alt="arrow" class="h-10"/>
        </div>
    </div>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
            <div className={fabulous.className}>
          <Typography id="modal-modal-title" variant="h6" component="h2" class="text-center text-white text-2xl">
            {title}
          </Typography>
          </div>
          <div class="w-90 overflow-hidden h-56 text-white pb-2">
          <img src={urlForImage(imageUrl)} alt={title}/>
          </div>
          
          <div className={jost.className}>
            <div id="time" class="text-white flex flex-row gap-x-4 py-4 text-lg font-light ">
              <img src="/clock_.png" alt='clock' />
              <p>{date}, {time}</p>

            </div>
            <div id="location" class="text-white flex flex-row gap-x-4 py-4 text-xl font-light">
              <img src="/location.png" alt='clock' class="ml-1"/>
              <p>{location}</p>

            </div>

            <div className={jost.className}>
            <Typography class="pt-4 font-extralight text-white text-lg" id="modal-modal-description" sx={{ mt: 2 }}>
              {description}
            </Typography>
            </div>
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
