import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      {/* Provide children to StyledButton */}
      <StyledButton disableHoverEffect={true}>Login</StyledButton>
    </Box>
  )
}

export default AuthNavigation
