/* eslint-disable react/no-unescaped-entities */
'use client'
import styles from './Textcom.module.css'
import { useState } from 'react';
import { motion } from 'framer-motion';
import MouseMoves from '../../../MouseMoves';

export default function Home() {

    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = MouseMoves();
    const size = isHovered ? 400 : 40;

    return (
        <main className={ styles.main }>
            <motion.div
                className={ styles.mask }
                animate={ {
                    WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
                    WebkitMaskSize: `${size}px`,
                } }
                transition={ { type: "tween", ease: "backOut", duration: 0.5 } }
            >
                <p className='testo' onMouseEnter={ () => { setIsHovered(true) } } onMouseLeave={ () => { setIsHovered(false) } }>
                    A Digital Agency - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
                </p>
            </motion.div>

            <div className={styles.body}>
                <p className='testo' >We are a <span className='test' >selectively skilled</span> Digital Agecy with strong focus on producing high quality & impactful digital experience.</p>
            </div>
        </main>
    )
}