import React from 'react';
import BarreNavigation from '../Navbar/Navbar'; // Importation du composant BarreNavigation
import PiedDePage from '../Footer/Footer'; // Importation du composant PiedDePage
import { Outlet } from 'react-router-dom'; // Importation du composant Outlet de react-router-dom

export default function MiseEnPage() {
    return (
        <>
            {/* Barre de navigation */}
            <BarreNavigation /> {/* Rendu du composant BarreNavigation */}

            {/* Routage ici */}
            <Outlet></Outlet> {/* Le composant Outlet est utilisé pour afficher les routes imbriquées */}

            {/* Pied de page */}
            <PiedDePage /> {/* Rendu du composant PiedDePage */}
        </>
    );
}
