import React, { useRef, useState } from 'react';
import './Portfolio.css';
const gallery = [
    {event: 'marriage', src:'./images/1.jpg'},
    {event: 'marriage', src:'./images/01.jpg'},
    {event: 'vodiondry', src:'./images/2.jpg'},
    {event: 'vodiondry', src:'./images/02.jpg'},
    {event: 'soratra', src:'./images/03.jpg'},
    {event: 'soratra', src:'./images/04.jpg'},
    {event: 'baptême', src:'./images/05.jpg'},
    {event: 'baptême', src:'./images/06.jpg'},
    {event: 'portrait', src:'./images/07.jpg'},
    {event: 'portrait', src:'./images/08.jpg'},
    {event: 'anniversaire', src:'./images/09.jpg'},
    {event: 'anniversaire', src:'./images/10.jpg'},
    {event: 'anniversaire', src:'./images/11.jpg'},
    {event: 'marriage', src:'./images/12.jpg'},
    {event: 'vodiondry', src:'./images/1.jpg'},
    {event: 'marriage', src:'./images/13.jpg'},
    {event: 'marriage', src:'./images/13.jpg'},
    {event: 'marriage', src:'./images/13.jpg'},
    {event: 'marriage', src:'./images/13.jpg'},
    {event: 'marriage', src:'./images/13.jpg'},
    {event: 'marriage', src:'./images/13.jpg'},
    
];
const Portfolio = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const events = Array.from(new Set(gallery.map((img) => img.event)));
    const handleClick = (event) => { 
        setSelectedEvent(event);
        document.body.classList.add('carre');
    }
    const handleBack = () => {
        setSelectedEvent(null);
        document.body.classList.remove('carre');
    }
    const imagesToShow = selectedEvent ? gallery.filter((img) => img.event === selectedEvent) : events.map((event) => {
        const firstImage = gallery.find((img) => img.event === event);
        return { ...firstImage, event}
    })
    return (
        <div className="portfolio-page">
            {selectedEvent 
                ? <h1>{selectedEvent}</h1>
                : <h1>Galerie</h1>
            }
            {selectedEvent &&(
                <button onClick={handleBack} className='back-button'>Retour</button>
            )}
            <div className="gallery">
                {imagesToShow.map((img, index) =>(
                    <div key={index} className="gallery-item" onClick={() => !selectedEvent && handleClick(img.event)}>
                        <img src={img.src} alt={img.event} />
                        <div className="overlay-text" >{img.event}</div>
                        {!selectedEvent && <p>{img.event}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
