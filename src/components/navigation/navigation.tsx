// navigation.tsx
import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from 'next/link' // Import Link from next/link
import { navigations } from './navigation.data'

const Navigation: FC = () => {
 return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          key={destination}
          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            ...(destination === '/' && {
              color: 'primary.main',
            }),
            '& > div': { display: 'none' },
            '&.current>div': { display: 'block' },
            '&:hover': {
              color: 'primary.main',
              '&>div': {
                display: 'block',
              },
            },
          }}
        >
          <Link href={destination}> {/* Use Link for navigation */}
            <Box
              sx={{
               position: 'absolute',
               top: 12,
               transform: 'rotate(3deg)',
               '& img': { width: 53, height: 'auto',alignItems: 'center'},
              }}
            >
              {/* eslint-disable-next-line */}
              <img src="/images/headline-curve.svg" alt="Headline curve" />
            </Box>
            {label}
          </Link>
        </Box>
      ))}
    </Box>
 )
}

export default Navigation
