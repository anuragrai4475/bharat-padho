import React from 'react';
import styles from './about.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.aboutUs}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Contact Us</h1>
          <p>
            We&apos;re available to assist and address any inquiries you may have. We eagerly await your communication!
          </p>
          <h2>Anshu Singh (Founder &amp; CEO)</h2>
          <h4>Email: anshusingh@bharatpadho.com</h4>
          <h4>Phone: +(91)7058252160</h4>
          <h2>Rohit Singh (Co-Founder )</h2>
          <h4>Email: rohitkumarsingh5361@gmail.com</h4>
          <h4>Phone: +(91)7004317218</h4>
          <h4>Office Address :- paramount golf forest zeta 1 , Greater Noida</h4>
          <a href="https://api.whatsapp.com/send?phone=917004317218">
      <button className={styles.button1}>Whatsapp us </button>
</a>

        </div>
      </section>
    </div>
  );
};

export default Hero;