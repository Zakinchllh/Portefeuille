// Importing necessary styles and components

import React, { useEffect } from 'react'

import ProjectsStyle from './Projects.module.css';
import { Link } from 'react-router-dom';

export default function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    return (
        <>
            {/* Projects section */}
            <section className={`${ProjectsStyle['containerSection']}`}>
                <div className="row">
{/* Project 1 */}
<div className="col-lg-4 col-md-6 col-xs-12">
  <div className={`${ProjectsStyle['card']}`}>
    <div className={`${ProjectsStyle['cover']} ${ProjectsStyle['item-a']}`}>
      <h1>Library Management System</h1> {/* Project title */}
      <span className={`${ProjectsStyle['price']}`}>19/1/2023</span> {/* Project date */}
      <div className={`${ProjectsStyle['card-back']}`}>
      <Link to="/project1">View demo & Code</Link> {/* Link to the project */}
      </div>
    </div>
  </div>
</div>

                    {/* Project 2 */}
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className={`${ProjectsStyle['card']}`}>
                            <div className={`${ProjectsStyle['cover']} ${ProjectsStyle['item-b']}`}>
                                <h1>Crud Operation Node.js</h1> {/* Project title */}
                                <span className={`${ProjectsStyle['price']}`}>23/3/2023</span> {/* Project date */}
                                <div className={`${ProjectsStyle['card-back']}`}>
                                <Link to="/project2">View demo & Code</Link> {/* Link to the project */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
}
