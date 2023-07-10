// Importation des styles et composants nécessaires
import './App.css';
import Home from './Components/Home/Home';

// Importation des dépendances liées au routage
import { RouterProvider, createHashRouter } from 'react-router-dom';

// Importation des composants de mise en page et de page
import Layout from './Components/Layout/Layout';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';
import Project1 from './Components/DetailsOfProject/Project1';
import Project2 from './Components/DetailsOfProject/Project2';

// Création de la configuration du routeur
let routers = createHashRouter([
  {
    // Route racine
    path: '/',
    element: <Layout />, // Rendre le composant Layout pour la route racine
    children: [
      // Routes enfants dans le composant Layout
      { index: true, element: <Home /> }, // Rendre le composant Home pour la route racine
      { path: 'aboutme', element: <AboutMe /> }, // Rendre le composant AboutMe pour la route '/aboutme'
      { path: 'myprojects', element: <Projects /> }, // Rendre le composant Projects pour la route '/myprojects'
      { path: 'contactme', element: <ContactMe /> }, // Rendre le composant ContactMe pour la route '/contactme'
      { path: 'project1', element: <Project1 /> }, // Rendre le composant Project1 pour la route '/project1'
      { path: 'project2', element: <Project2 /> }, // Rendre le composant Project2 pour la route '/project2'
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={routers} /> // Fournir la configuration du routeur à l'application
  );
}

export default App;
