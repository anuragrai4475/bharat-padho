import React from 'react'
import styles from './about.module.css'

const Hero: React.FC = () => {
  return (
    <div className={styles.aboutUs}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Our Education Consultancy</h1>
          <p>
            We are a leading education consultancy dedicated to helping students achieve their academic and career
            goals. With a team of experienced professionals, we offer personalized guidance, test preparation, and
            college application assistance.
          </p>
        </div>
      </section>

      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceList}>
          <div className={styles.serviceItem}>
            <h3>Personalized Guidance</h3>
            <p>
              Our consultants provide personalized guidance to help students understand their strengths and weaknesses,
              and develop a plan to achieve their academic and career goals.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Test Preparation</h3>
            <p>
              We offer comprehensive test preparation courses, including practice tests, study materials, and one-on-one
              tutoring to help students perform their best on standardized tests.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3>College Application Assistance</h3>
            <p>
              Our team assists students with the college application process, including essay writing, application
              essays, and interview preparation to help them stand out to colleges.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
