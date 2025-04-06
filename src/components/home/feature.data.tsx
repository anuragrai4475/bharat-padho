import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessable',
    description: 'With our user-friendly platform and dedicated team of experts, we have made the process of seeking guidance and support for your academic journey easier than ever before',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: 'Unlock quality education without breaking the bank with our more affordable cost solutions',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Extensive Help In Admission',
    description: 'Comprehensive support from application to acceptance, ensuring your smooth admission journey',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Consultation With Mentor',
    description: 'Personalized guidance: Consultation with Mentor',
    icon: <ContactSupportIcon />,
  },
]
