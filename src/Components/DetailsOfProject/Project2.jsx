// Importing necessary styles and components
import React from 'react';
import DetailsOfProjectStyle from './DetailsOfProject.module.css';

export default function Project2() {
  return (
    <>
      {/* Section des détails du projet */}
      <section className={`${DetailsOfProjectStyle['detailsSection']}`}>
        <div className={`${DetailsOfProjectStyle['content']}`}>
          <div className={`${DetailsOfProjectStyle['continerDetails']}`}>
            {/* Image du projet */}
            <img className={`${DetailsOfProjectStyle['item']}`} src={process.env.PUBLIC_URL + '/Images/website2.png'} />

            <div>
              {/* Titre du projet */}
              <h4 className={`${DetailsOfProjectStyle['text']}`}>Crud-Operation-Node.js</h4>

              {/* Description du projet */}
              <h5 className={`${DetailsOfProjectStyle['subtext']}`}>
                Ce code représente un ensemble de fonctions de contrôleur qui gèrent les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour la gestion des réservations d'hébergement. Ces fonctions sont construites à l'aide du framework Express.js et utilisent le package express-validator pour la validation des entrées.
              </h5>

              {/* Technologies utilisées */}
              <div className={`${DetailsOfProjectStyle['technologies']}`}>
                <span>JavaScript</span>
                <span>Node.js</span>
              </div>

              {/* Prix du projet */}
              <div className={`${DetailsOfProjectStyle['priceing']}`}>
                <a href="https://github.com/Zakinchllh/Crud-Operation-Node.js" target='_blank'>Github <i className="fa-brands fa-github"></i></a> {/* Lien vers le dépôt GitHub du projet */}
              </div>  
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
