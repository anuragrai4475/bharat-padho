// navigation.data.ts
import type { Navigation } from '@/interfaces/navigation'

export const navigations: Navigation[] = [
 {
    label: 'Home',
    path: '/', // Adjusted for BrowserRouter
 },
 {
    label: 'Courses',
    path: '/courses', // Adjusted for BrowserRouter
 },
 {
    label: 'Colleges',
    path: '/colleges_uni', // Adjusted for BrowserRouter
 },
 {
    label: 'About Us',
    path: '/about_us', // Adjusted for BrowserRouter
 },
 {
   label: 'Contact Us',
   path: '/contact_us',
 }
]
