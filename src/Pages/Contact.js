import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="contact-columns">

          {/* Coordonnées à gauche */}
          <div className="info-section">
            <div><img src="/Ginot.jpg" className="perso-img" alt="Ranto Rambeloson" /></div>
            <div className="line">📍 La Roche sur Yon & Longueville sur Mer, France</div>
            <div className="line">📞 Tél : 0665977240</div>
            <div className="line">📧 alexis.allano@gmail.com</div>
            <div className="line">
              👍 Photographe & Vidéaste indépendant<br />Télépilote Drone certifié.
            </div>

            <div className="regions">
              <span>Vendée</span> – La Roche sur Yon - Longueville sur Mer - La Tranche sur Mer - Les Sables d’Olonne - Saint Gilles Croix de Vie – Noirmoutier – Challans – Montaigu – Les Herbiers<br />
              <span>Loire-Atlantique</span> – Nantes - La Baule - Deux-Sèvres - Niort<br />
              <span>Maine et Loire</span> – Angers – Cholet<br />
              <span>Charente-Maritime</span> – La Rochelle - Île de Ré - Royan<br />
              <span>Gironde</span> – Bordeaux – St Emilion – Arcachon – Lège-Cap Ferret<br />
              <span>Pays Basque</span> – Biarritz – Anglet – Bayonne<br />
              <span>Bretagne</span> – Rennes - Brest - Quiberon – Vannes – Lorient – Quimper – Saint-Brieuc – Saint-Malo<br />
              <strong>Paris – FRANCE</strong>
            </div>
          </div>

          {/* Formulaire à droite */}
          <div className="form-section">
            <form className="contact-form">
              <label htmlFor="identity">VOTRE IDENTITÉ *</label>
              <input type="text" id="identity" placeholder="Prénom Nom" required />

              <label htmlFor="phone">TÉLÉPHONE *</label>
              <input type="tel" id="phone" required />

              <label htmlFor="email">ADRESSE DE MESSAGERIE *</label>
              <input type="email" id="email" required />

              <label htmlFor="date">DATE DE VOTRE ÉVÉNEMENT</label>
              <input type="date" id="date" />

              <label htmlFor="project">PROJET</label>
              <select id="project">
                <option>Mariage</option>
                <option>Événement</option>
                <option>Séance photo</option>
              </select>

              <label htmlFor="message">VOTRE MESSAGE</label>
              <textarea id="message"></textarea>

              <small>
                ☑️ EN RÉALISANT CETTE DEMANDE, VOUS CONSENTEZ AUX CONDITIONS DE CONFIDENTIALITÉ QUI RESPECTE VOTRE VIE PRIVÉE.
              </small>

              <button type="submit">ENVOYER</button>
            </form>
          </div>
        </div>
      </div>
    </>

  );
};

export default Contact;
