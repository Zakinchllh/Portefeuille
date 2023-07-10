import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarStyle from './Navbar.module.css';

export default function Navbar() {

    // La fonction sera exécutée lors du clic sur le bouton
    const DownloadCV = () => {
        // Utilisation de la méthode JavaScript pour obtenir le fichier PDF
        fetch('GhanemZakariaCV.pdf').then(response => {
            response.blob().then(blob => {
                // Création d'un nouvel objet pour le fichier PDF
                const fileURL = window.URL.createObjectURL(blob);
                // Configuration des différentes valeurs de propriété
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'GhanemZakariaCV.pdf';
                alink.click();
            })
        })
    }


    const [isNavOpen, setIsNavOpen] = useState(false); // État pour suivre l'ouverture ou la fermeture du menu de navigation

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // Fonction pour basculer l'état du menu de navigation
    };

    const closeNav = () => {
        setIsNavOpen(false); // Fonction pour fermer le menu de navigation
    };

    const ClickButtomCV = () => {
        closeNav();
        DownloadCV();
    };



    return (
        <>
            <nav className={`${NavbarStyle['navbar']} navbar navbar-expand-lg navbar-light position-fixed top-0 start-0 end-0 px-5`}>
                <div className="container px-3">
                    <Link className={`${NavbarStyle['text-gradient']} navbar-brand fs-2`} to="/" onClick={closeNav}>
                        <span className={`${NavbarStyle['first-Letter']} fs-1`}>G</span>hanem Zakaria
                    </Link>

                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item active">
                                <Link className={`${NavbarStyle['nav-link']} ${NavbarStyle['text-gradient']}`} to="/" onClick={closeNav}>
                                    Accueil
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${NavbarStyle['nav-link']} ${NavbarStyle['text-gradient']}`} to="/aboutme" onClick={closeNav}>
                                    À propos de moi
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${NavbarStyle['nav-link']} ${NavbarStyle['text-gradient']}`} to="/myprojects" onClick={closeNav}>
                                    Mes projets
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${NavbarStyle['nav-link']} ${NavbarStyle['text-gradient']}`} to="/contactme" onClick={closeNav}>
                                    Contactez-moi
                                </Link>
                            </li>
                            {/* Télécharger le CV */}
                            <li className={`${NavbarStyle['Download-CV']}`}>
                                <button className={`px-3 py-1 rounded`} onClick={ClickButtomCV}>
                                    Télécharger le CV
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
