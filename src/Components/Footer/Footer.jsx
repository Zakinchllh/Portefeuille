// Importing necessary styles and components
import React from 'react';
import FooterStyle from './Footer.module.css';

export default function Footer() {
  return (
    <>
      {/* Séparateur de ligne horizontal */}
      <hr className={`${FooterStyle['horizental-line']}`} />

      {/* Section du pied de page */}
      <footer className={`${FooterStyle['footer']}`}>
        <div className={`${FooterStyle['footer-content']}`}>
          {/* Titre du pied de page */}
          <h3>Ghanem Zakaria</h3>
          <p>En tant que développeur web, je suis passionné par la création de solutions web innovantes et conviviales. Je me spécialise dans le développement frontend et backend, en utilisant des technologies modernes pour créer des sites web fluides et visuellement attrayants. Avec une expertise en HTML, CSS, JavaScript et des frameworks tels que React et Node.js, je suis compétent dans le développement d'applications web réactives et interactives. Je m'efforce de fournir un code de haute qualité, garantissant des performances et une sécurité optimales. Collaborons ensemble pour donner vie à vos idées web !</p>

          {/* Icônes des réseaux sociaux */}
          <ul className={`${FooterStyle['socials']}`}>
            <li>
              {/* Lien Facebook */}
              <a href="https://www.facebook.com/zakaria.ghanem.16" target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            </li>
            <li>
              {/* Lien GitHub */}
              <a href="https://github.com/Zakinchllh" target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </li>
            <li>
              {/* Lien LinkedIn */}
              <a href="https://www.linkedin.com/in/zakaria-ghanem-005b95203" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            </li>
          </ul>
        </div>

        {/* Section inférieure du pied de page */}
        <div className={`${FooterStyle['footer-bottom']}`}>
          <p>
            {/* Informations de droits d'auteur */}
            Droits d'auteur &copy;2023 Ghanem Zakaria. Conçu par <span>Ghanem Zakaria</span>
          </p>
        </div>
      </footer>
    </>
  );
}
