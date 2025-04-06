import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/SOA.jpg',
    name: "SIKSHA 'O' ANUSANDHAN",
    category: 'Bhubaneswar',
    description: 'IT/IS, Data science & machine learning',
    company: {
      name: 'SOA',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Siksha_%E2%80%98O%E2%80%99_Anusandhan.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/symbiosis.jpg',
    name: 'SYMBIOSIS',
    category: 'Pune',
    description:
      'Marketing, Human resources, Finance & banking, International Business, E-Business & Digital marketing',
    company: {
      name: 'Symbiosis',
      logo: 'https://symhealth.siu.edu.in/assets/SIUDeemedUniversity151.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/CU.jpg',
    name: 'Chandigarh University (CU)',
    category: 'Chandigarh',
    description: 'BBA, BCOM, BFA, BA, MBA , B.TECH',
    company: {
      name: 'CU',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Chandigarh_University_Seal.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/xavier.jpg',
    name: 'St. Xaviers College',
    category: 'Mumbai',
    description: 'BBA, BCOM, BFA, BA',
    company: {
      name: 'Xavier',
      logo: 'https://www.sxcran.org/assets/images/logo.png',
    },
  },
]
