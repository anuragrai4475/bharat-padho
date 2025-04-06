import React, { useState, useEffect } from 'react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { coursesData } from '../data/colleges_uni.data' // Adjust the path as necessary
// Removed the unused import for 'Link'
import Image from 'next/image' // Import Image from next/image for optimized image rendering
import styles from './PopularCoursePage.module.css' // Import the CSS module

type CourseCardProps = {
  photo: string // Assuming photo is a URL string
  name: string
  category: string
  state: string // Assuming state is a string, adjust as necessary
  description: string[]
}

const CourseCard: React.FC<CourseCardProps> = ({ photo, name, category, state, description }) => {
  const formattedDescription = description.join(', ')
  const [hasValidPhoto, setHasValidPhoto] = useState(false)

  const checkPhotoValidity = async (url: string): Promise<void> => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`)
      }
      setHasValidPhoto(true)
    } catch (error) {
      console.error('Failed to fetch photo:', error)
      setHasValidPhoto(false)
    }
  }

  useEffect(() => {
    if (photo) {
      checkPhotoValidity(photo)
    }
  }, [photo])

  return (
    <div
      className={styles.courseCard}
      style={{
        border: '3px solid #d48e02',
        borderRadius: '18px',
        padding: '16px',
        margin: '8px',
        boxShadow: '0 22px 19px rgba(100,60,6,0.5)',
        backgroundColor: '#FFE8D3',
      }}
    >
      {hasValidPhoto ? (
        <Image src={photo} alt={name} width={500} height={300} />
      ) : (
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Default"
          width={500}
          height={300}
        />
      )}
      <h2>{name}</h2>
      <p>
        <strong>City:</strong> {category}
      </p>
      <p>
        <strong>State:</strong> {state}
      </p>
      <p>
        <strong>Courses Offered:</strong> {formattedDescription}
      </p>
    </div>
  )
}

const PopularCoursePage: React.FC = () => {
  const [sortedCourses, setSortedCourses] = useState(coursesData)
  const [sortMethod, setSortMethod] = useState('alphabetical') // Default sort method

  const sortCourses = (method: string): void => {
    const sortedList = [...sortedCourses] // Use sortedCourses state instead of coursesData directly
    switch (method) {
      case 'alphabetical':
        sortedList.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'category':
        sortedList.sort((a, b) => a.category.localeCompare(b.category))
        break
      case 'state':
        sortedList.sort((a, b) => a.state.localeCompare(b.state))
        break
      default:
        break
    }
    setSortedCourses(sortedList) // Correctly use setSortedCourses to update the state
  }

  useEffect(() => {
    sortCourses(sortMethod) // Initial sort based on sortMethod state
  }, [sortMethod, sortCourses])

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
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          margin: '16px 0',
          color: '#140f01',
        }}
      ></div>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          margin: '16px 0',
          color: '#140f01',
        }}
      >
        Engineering Colleges
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: '#f0f0f0',
          borderRadius: '5px',
        }}
      >
        <span style={{ marginRight: '10px' }}>Sort</span>
        <button
          onClick={() => setSortMethod('alphabetical')}
          style={{
            padding: '5px 10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Sort Alphabetically
        </button>
        <button
          onClick={() => setSortMethod('category')}
          style={{
            padding: '5px 10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Sort By City
        </button>
        <button
          onClick={() => setSortMethod('state')}
          style={{
            padding: '5px 10px',
            backgroundColor: 'rgb(255, 41, 41)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Sort By State
        </button>
      </div>
      <div className={styles.gridContainer}>
        {sortedCourses.map((course, index) => (
          <CourseCard
            key={`${course.name}-${index}`}
            photo={course.photo}
            name={course.name}
            category={course.category}
            state={course.state}
            description={course.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default PopularCoursePage
