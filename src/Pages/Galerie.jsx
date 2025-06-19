import React, { useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import './Galerie.css';
const events = ['Anniversaires' ,'Mariages', 'Vodiondry', 'Soratra','Baptême'];

const Galerie = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const nextEvent = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % events.length);
    };
    const prevEvent = () =>{
        setDirection(-1);
        setIndex((prev) => (prev - 1 + events.length) % events.length);
    };
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
    return (
    <>
        <div className='slider-container'>
            <div className='slider-controls'>
                <button onClick={prevEvent} className='slider-button'>prev</button>
                <div className='slider-display'>
                    <AnimatePresence custom={direction} mode='wait'>
                        <motion.h1
                            key={index}
                            custom={direction}
                            variants={variants}
                            initial ="enter"
                            animate ="center"
                            exit = "exit"
                            transition={{ duration: 0.4}}
                            className= 'slider-text'>
                                {events[index]}
                        </motion.h1>
                    </AnimatePresence>
                </div>
                <button onClick={nextEvent} className='slider-button'>suiv</button>
            </div>
            <div className='slider-indicator'>
                {events.map((_, i) => (
                    <div key={i} className={`indicator ${i === index ? 'active' : ''}`}></div>
                ))}
            </div>
        </div>
    </>
    );
};

export default Galerie;