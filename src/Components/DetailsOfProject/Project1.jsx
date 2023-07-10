// Importing necessary styles and components
import React from 'react';
import DetailsOfProjectStyle from './DetailsOfProject.module.css';

export default function Project1() {
  return (
    <>
      {/* Section des détails du projet */}
      <section className={`${DetailsOfProjectStyle['detailsSection']}`}>
        <div className={`${DetailsOfProjectStyle['content']}`}>
          <div className={`${DetailsOfProjectStyle['continerDetails']}`}>
            {/* Image du projet */}
            <img className={`${DetailsOfProjectStyle['item']}`} src={process.env.PUBLIC_URL + '/Images/Library.png'} />

            <div>
              {/* Titre du projet */}
              <h4 className={`${DetailsOfProjectStyle['text']}`}>Système de gestion de bibliothèque</h4>

              {/* Description du projet */}
              <h5 className={`${DetailsOfProjectStyle['subtext']}`}>
                Le système de gestion de bibliothèque est une application web développée pour gérer les opérations de la bibliothèque, y compris l'authentification, l'autorisation et les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer). Ce projet vise à fournir un moyen fluide et efficace de gérer les ressources de la bibliothèque et d'améliorer l'expérience utilisateur.
              </h5>

              {/* Technologies utilisées */}
              <div className={`${DetailsOfProjectStyle['technologies']}`}>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>JQuery</span>
              </div>

              {/* Prix du projet */}
              <div className={`${DetailsOfProjectStyle['priceing']}`}>
                <a href="https://github.com/Zakinchllh/Library" target='_blank'>Github <i className="fa-brands fa-github"></i></a> {/* Lien vers le dépôt GitHub du projet */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
