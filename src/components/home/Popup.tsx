import React, { FC } from 'react';
import Modal from '@mui/material/Modal';
import HomeNewsLetter from './newsletter_popup';

interface PopUpProps {
  open: boolean;
  onClose: () => void;
}

const PopUp: FC<PopUpProps> = ({ open, onClose }) => {
  const handleClose = (): void => {
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div>
        <HomeNewsLetter />
      </div>
    </Modal>
  );
};

export default PopUp;