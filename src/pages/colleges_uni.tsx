import React from 'react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { coursesData } from '../data/colleges_uni.data' // Adjust the path as necessary
import Link from 'next/link' // Import Link for navigation

// Define a simple card component
interface CourseCardProps {
  photo: string
  name: string
  category: string
  description: string[]
}

const CourseCard: React.FC<CourseCardProps> = ({ photo, name, category, description }) => {
  // Split the description by courses and join them with commas and spaces
  const formattedDescription = description.join(', ')

  return (
    <div
      style={{
        border: '1px solid #d48e02',
        borderRadius: '218px',
        padding: '16px',
        margin: '8px',
        boxShadow: '0 22px 19px rgba(100,60,0,0.1)',
      }}
    >
      <img src={photo} alt={name} style={{ width: '100%', height: 'auto' }} />
      <h2>{name}</h2>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Courses Offered:</strong> {formattedDescription}
      </p>
    </div>
  )
}

const PopularCoursePage: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        minHeight: '100vh',
      }}
    >
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row', // Default direction
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 20px)',
          width: '100%',
          margin: '16px 0',
          color: '#140f01',
          flexWrap: 'wrap', // Allow items to wrap onto multiple lines
          backgroundImage: `url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: 'cover', // Adjust the size of the background image
          backgroundPosition: 'center',
        }}
      >
        <Link href="/engineering_page">
          <div
            style={{
              margin: '0 10px',
              cursor: 'pointer',
              padding: '16px',
              borderRadius: '24px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #d48e02',
              color: 'black',
              backgroundImage:
                'url(https://img.freepik.com/free-vector/white-technology-background_23-2148390327.jpg?w=1060&t=st=1712518920~exp=1712519520~hmac=add68abf25a709618fa4fb2eac2e1f72e31f74fdf00e4ff63d376f6bccb9484b)', // Add your background image URL here
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '290px',
              height: '130px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              textDecoration: 'none', // Remove underline
            }}
          >
            <strong>Engineering Colleges</strong>
          </div>
        </Link>
        <Link href="/medical_colleges">
          <div
            style={{
              margin: '0 10px',
              cursor: 'pointer',
              padding: '16px',
              borderRadius: '24px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #d48e02',
              color: 'black',
              backgroundImage:
                'url(https://img.freepik.com/free-vector/medical-healthcare-blue-color_1017-26807.jpg?w=1380&t=st=1712519259~exp=1712519859~hmac=3cc1546c0e5d2cd2e1b05836b5d91f63ab8d49e3453b9ed2f668cdeed0ddd6ab)', // Add your background image URL here
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '290px',
              height: '130px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              textDecoration: 'none', // Remove underline
            }}
          >
            <strong>Medical Colleges</strong>
          </div>
        </Link>
        <Link href="/law_colleges">
          <div
            style={{
              margin: '0 10px',
              cursor: 'pointer',
              padding: '16px',
              borderRadius: '24px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #d48e02',
              color: 'black',
              backgroundImage:
                'url(https://images.unsplash.com/photo-1433574466251-fe1be0d9b3d2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Add your background image URL here
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '290px',
              height: '130px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              textDecoration: 'none', // Remove underline
            }}
          >
            <strong>Law Colleges</strong>
          </div>
        </Link>
        <Link href="/arts_colleges">
          <div
            style={{
              margin: '0 10px',
              cursor: 'pointer',
              padding: '16px',
              borderRadius: '24px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #d48e02',
              color: 'black',
              backgroundImage:
                'url(https://img.freepik.com/free-photo/top-view-paint-brush-corner_23-2147961441.jpg?w=1060)', // Add your background image URL here
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '290px',
              height: '130px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              textDecoration: 'none', // Remove underline
            }}
          >
            <strong>Humanities and Arts Colleges</strong>
          </div>
        </Link>
        <Link href="/management_colleges">
          <div
            style={{
              margin: '0 10px',
              cursor: 'pointer',
              padding: '16px',
              borderRadius: '24px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #d48e02',
              color: 'black',
              backgroundImage:
                'url(https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Add your background image URL here
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '290px',
              height: '130px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              textDecoration: 'none', // Remove underline
            }}
          >
            <strong>MBA Colleges</strong>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default PopularCoursePage
