import React from 'react';
import './Apropos.css';
const Apropos = () => {
    return (
        <>
            <section className="profil-container">
                <h2>Un projet photographique ? Réalisons-le ensemble.</h2>
                <div className="profil">
                    <div className="profil-image">
                        <img src="/Ginot.jpg" alt="Ranto Rambeloson" />
                    </div>  
                    <div className="profil-description">
                        <h3>Ranto Rambeloson</h3>
                        <p>
                            Mon avidité pour la créativité, l'art, la découverte, en bref, pour la vie, n'a fait que réveiller en moi une passion bien enfouie : la photographie.
                            Passion qui m'a poussé encore et encore à me rapprocher et me connecter avec les belles et magiques personnes que vous êtes.
                        </p>
                        <p>
                            Je m'appelle Ranto Rambeloson, je suis un photographe professionnel basé à Madagascar. J'aime faire ressortir la beauté en chaque cliché, en chaque photo. Et cela en vivant des aventures et en vous aidant à atteindre vos objectifs.
                        </p>
                        <p>
                            Donc ensemble vivons, découvrons le monde, réalisons nos projets afin de les éterniser et les donner vie à travers la photographie.
                        </p>
                        <p className="citation">"Photography exists too help people see"</p>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Apropos;