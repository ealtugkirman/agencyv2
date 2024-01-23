import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Button({ isActive, toggleMenu }) {
  useEffect(() => {
    const handleScroll = () => {
      // Check if the menu is currently open before closing on scroll
      if (isActive) {
        toggleMenu();
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive, toggleMenu]);

  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el} onClick={() => toggleMenu()}>
          <PerspectiveText label="Menu" />
        </div>
        <div className={styles.el} onClick={() => toggleMenu()}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
