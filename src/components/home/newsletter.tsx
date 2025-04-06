import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { StyledButton } from '../styled-button';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const HomeNewsLetter: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Recipient Name', // Replace with the recipient's name
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send('service_exfx5g9', 'template_6gjl4ti', templateParams, 'QIxRddgPHhkvr4yLf').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // Clear form data after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Contact Us
          </Typography>
          <Typography sx={{ mb: 6 }}>Send us a message.</Typography>

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
  );
};

export default HomeNewsLetter;