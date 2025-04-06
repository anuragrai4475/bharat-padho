import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Helped Extensively',
    content:
      'Their knowledgeable consultants provided personalized advice at every step, from selecting the right programs to preparing strong application materials',
    user: {
      id: 1,
      name: 'Rajesh Patel',
      professional: 'Pursuing MBA',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Best Guidance',
    content:
      'With their support, I gained admission to a top-ranked university and received a generous scholarship package.',
    user: {
      id: 1,
      name: 'Priya Sharma',
      professional: 'Pursuing MA in English',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Consultants have extensive knowledge',
    content:
      'Their consultants provided personalized attention and tailored advice based on my academic interests and career aspirations',
    user: {
      id: 1,
      name: 'Arjun Khatri',
      professional: 'Pursuing M.TECH',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Total commitment for admission',
    content:
      'I appreciated their prompt responses to my queries and their proactive approach to addressing any concerns that arose along the way. Thanks to their support, I received multiple offers of admission from reputable universities and am now well on my way to pursuing my academic aspirations.',
    user: {
      id: 1,
      name: 'Deepika Singh',
      professional: 'Pursuing BBA',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Visa assistance',
    content:
      'Their consultants demonstrated a deep understanding of the intricacies of the admissions process and provided invaluable advice tailored to my unique circumstances. From visa assistance to pre-departure orientation, they left no stone unturned in ensuring a smooth transition to university life overseas.',
    user: {
      id: 1,
      name: 'Vikram Gupta',
      professional: 'Pursuing B.TECH',
      photo: '5.jpg',
    },
  },
]
