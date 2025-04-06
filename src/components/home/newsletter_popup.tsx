import React, { useState, ChangeEvent, FormEvent } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { StyledButton } from '../styled-button';
import emailjs from 'emailjs-com';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const HomeNewsLetter: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [showForm, setShowForm] = useState<boolean>(true); // State to control form visibility

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs.sendForm('service_exfx5g9', 'template_6gjl4ti', e.currentTarget, 'QIxRddgPHhkvr4yLf').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleClose = (): void => {
    setShowForm(false); // Close the form
  };

  return (
    showForm ? (
      <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
        <Container maxWidth={false} sx={{ width: { xs: '100%', sm: '90%', md: '80%', lg: '70%', xl: '60%' } }}>
          <Box
            sx={{
              backgroundColor: 'secondary.main',
              borderRadius: 10,
              py: { xs: 4, md: 10 },
              px: { xs: 4, md: 8 },
              textAlign: 'center',
              position: 'relative', // Added to position the close button correctly
            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                color: 'white', // Adjust color as needed
              }}
              onClick={handleClose} // Close the form when the button is clicked
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
              Welcome to BharatPadho
            </Typography>
            <Typography sx={{ mb: 6 }}>Please fill out the form below to get in touch with us</Typography>

            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  width: { xs: '100%', md: 560 },
                  mx: 'auto',
                  textAlign: 'center',
                }}
              >
                <InputBase
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: '100%',
                    height: 48,
                    px: 2,
                  }}
                />
                <InputBase
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: '100%',
                    height: 48,
                    px: 2,
                  }}
                />
                <InputBase
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: '100%',
                    height: 48,
                    px: 2,
                  }}
                />
                <InputBase
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: '100%',
                    height: 48,
                    px: 2,
                  }}
                />
                <InputBase
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  multiline
                  rows={4}
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: '100%',
                    align: 'center',
                    height: 120,
                    px: 2,
                  }}
                />
                <StyledButton disableHoverEffect size="large" type="submit">
                  Send Message
                </StyledButton>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
    ) : null
  );
};

export default HomeNewsLetter;