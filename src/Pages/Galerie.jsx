import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Galerie.css';

const slides = [
    { event: 'Anniversaires', background: './images/1.jpg', description: 'Ceci est un évenement anniversaires' },
    { event: 'Mariages', background: './images/2.jpg', description: 'Ceci est un évenement mariage' },
    { event: 'Vodiondry', background: './images/03.jpg', description: 'Ceci est un évenement vodiondry' },
    { event: 'Soratra', background: './images/06.jpg', description: 'Ceci est un évenement soratra' },
    { event: 'Baptême', background: './images/12.jpg', description: 'Ceci est un évenement baptéme' }
];

const Galerie = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // 15s

        return () => clearInterval(interval);
    }, []);

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir) => ({
            x: dir > 0 ? -100 : 100,
            opacity: 0,
        }),
    };

    const current = slides[index];

    return (
        <div className='slider-container'>
            <div
                className='slider-controls'
                style={{
                    backgroundImage: `url(${current.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className='overlay'>
                    <div className='slider-display'>
                        <AnimatePresence custom={direction} mode='wait'>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.8 }}
                                className='slider-content'
                            >
                                <h1 className='slider-title'>{current.event}</h1><br />
                                <p className='slider-description'>{current.description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div className='slider-indicator'>
                {slides.map((_, i) => (
                    <div key={i} className={`indicator ${i === index ? 'active' : ''}`}></div>
                ))}
            </div>
        </div>
    );
};

export default Galerie;
