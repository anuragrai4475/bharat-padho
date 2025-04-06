import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link'; // Import Link for navigation

interface Props {
 onClick?: () => void;
 variant?: 'primary' | 'secondary';
}

const Logo: FC<Props> = ({ onClick, variant }) => {
 return (
    <Box onClick={onClick}>
      <Link href="/" passHref> {/* Add this line to create a link to the home page */}
        <Typography
          component="div"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 700,
            fontSize:30,
            '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' },
          }}
        >
          Bharat<span>Padho</span>
        </Typography>
      </Link>
    </Box>
 );
};

Logo.defaultProps = {
 variant: 'primary',
};

export default Logo;
