import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Hero from '../components/about_us/about';

const AboutUs: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Hero/>
      <Footer />
    </div>
  );
}

export default AboutUs;