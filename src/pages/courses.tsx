import React from 'react'
import AnimatedCard from '@/components/cards/animated_cards'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const App: React.FC = () => {
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
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 20px)', // Adjust the height to account for the Header and Footer
          width: '100%',
          margin: '16px 0',
          color: '#140f01',
          flexWrap: 'wrap', // Allow the items to wrap as needed
          gap: '10px', // Add a gap between the cards
          padding:'0px',
          backgroundImage: `url("https://images.unsplash.com/photo-1616330682546-2468b2d8dd17?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: 'cover', // Adjust the size of the background image
        backgroundPosition: 'center',
        backdropFilter: 'blur(18px)',
        }}
      >
        <AnimatedCard
          title="Engineering Courses"
          content="Click to show the Engineering courses:"
          imageSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          expandedContent={[
            'IT/IS',
            'Data science & machine learning',
            'Computer science',
            'Civil engineering',
            'Electrical engineering',
            'Mechanical engineering',
          ]}
        />
        <AnimatedCard
          title="Medical Courses"
          content="Click to show the Medical courses:"
          imageSrc="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          expandedContent={['MBBS', 'BDS', 'BAMS', 'BHMS', 'BUMS', 'BPT']}
        />
        <AnimatedCard
          title="Management Courses"
          content="Click to show the Management courses:"
          imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          expandedContent={[
            'Marketing',
            'Human resources',
            'Finance & banking',
            'International Banking',
            'E-Buisness & Digital Marketing',
          ]}
        />
        <AnimatedCard
          title="Law Courses"
          content="Click to show the Law courses:"
          imageSrc="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          expandedContent={[
            'BBA-LLB',
            'BALLB',
            'LLB',
            'BCOM LLB',
            'BSC LLB',
            'LLM',
          ]}
        />
        <AnimatedCard
          title="Humanities and Arts Courses"
          content="Click to show the Humanities courses:"
          imageSrc="https://images.unsplash.com/photo-1661697522367-f49bedf96873?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          expandedContent={[
            'BFA',
            'BA',
          ]}
          
        />
        
        
      </div>
      <Footer />
    </div>
  )
}

export default App
