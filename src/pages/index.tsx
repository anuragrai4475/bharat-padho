import React, { useState, useEffect, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { MainLayout } from '@/components/layout';
import PopUp from '../components/home/Popup';

const DynamicHomeHero = dynamic(() => import('../components/home/hero'));
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'));
const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'));
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'));
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'));
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'));

type NextPageWithLayout = React.FC & {
  getLayout?: (page: ReactNode) => ReactNode;
};

const Home: NextPageWithLayout = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsPopUpOpen(true);
    }, 10000); // 10 seconds delay

    return () => {
      setIsMounted(false); // Set isMounted to false on unmount
      clearTimeout(timer); // Cleanup timer on unmount
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const handlePopUpClose = (): void => {
    setIsPopUpOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DynamicHomeHero />
      <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicHomeTestimonial />
      <DynamicHomeOurMentors />
      <DynamicHomeNewsLetter />
      <PopUp open={isPopUpOpen} onClose={handlePopUpClose} />
    </>
  );
};

Home.getLayout = (page: ReactNode): ReactNode => <MainLayout>{page}</MainLayout>;

export default Home;