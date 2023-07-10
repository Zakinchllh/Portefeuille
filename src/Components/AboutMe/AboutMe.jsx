// Importing necessary styles and components
import React, { useEffect, useState } from 'react';
import AboutMeStyle from './AboutMe.module.css';

export default function AboutMe() {
  const [counter, setCounter] = useState({
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
  });

  useEffect(() => {
    function increaseNumber() {
      // Start intervals to increase the numbers gradually
      let interval1 = setInterval(() => {
        setCounter((prevCounter) => ({
          ...prevCounter,
          number1: prevCounter.number1 + 1,
        }));
      }, 40);

      let interval2 = setInterval(() => {
        setCounter((prevCounter) => ({
          ...prevCounter,
          number2: prevCounter.number2 + 1,
        }));
      }, 22);

      let interval3 = setInterval(() => {
        setCounter((prevCounter) => ({
          ...prevCounter,
          number3: prevCounter.number3 + 1,
        }));
      }, 66);

      let interval4 = setInterval(() => {
        setCounter((prevCounter) => ({
          ...prevCounter,
          number4: prevCounter.number4 + 1,
        }));
      }, 27);

      // Cleanup function to clear all intervals when the component unmounts
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
        clearInterval(interval4);
      };
    }

    // Call the increaseNumber function when the component mounts
    increaseNumber();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <>
      <section className={`${AboutMeStyle['cantainerSection']}`}>
        <div className="row">
          <div className="col-md-12 col-lg-6 m-auto">
            <h1 className={`${AboutMeStyle['heading']}`}>Langues</h1>
            <div className={`${AboutMeStyle['horizontal-bars']}`}>
              {/* Horizontal Bar 1 */}
              <div className={`${AboutMeStyle['bar']}`}>
                <div className={`${AboutMeStyle['info']}`}>
                  <span>HTML</span>
                </div>
                <div className={`${AboutMeStyle['progress-line']} ${AboutMeStyle['html']}`}>
                  <span>{counter.number1}%</span>
                </div>
              </div>
              {/* Horizontal Bar 2 */}
              <div className={`${AboutMeStyle['bar']}`}>
                <div className={`${AboutMeStyle['info']}`}>
                  <span>CSS</span>
                </div>
                <div className={`${AboutMeStyle['progress-line']} ${AboutMeStyle['css']}`}>
                  <span>{counter.number2}%</span>
                </div>
              </div>
              {/* Horizontal Bar 3 */}
              <div className={`${AboutMeStyle['bar']}`}>
                <div className={`${AboutMeStyle['info']}`}>
                  <span>JS</span>
                </div>
                <div className={`${AboutMeStyle['progress-line']} ${AboutMeStyle['JS']}`}>
                  <span>{counter.number3}%</span>
                </div>
              </div>
              {/* Horizontal Bar 4 */}
              <div className={`${AboutMeStyle['bar']}`}>
                <div className={`${AboutMeStyle['info']}`}>
                  <span>jQuery</span>
                </div>
                <div className={`${AboutMeStyle['progress-line']} ${AboutMeStyle['jquery']}`}>
                  <span>{counter.number4}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 m-auto">
            <h1 className={`${AboutMeStyle['heading']}`}>Compétences</h1>
            <div className={`${AboutMeStyle['radial-bars']}`}>
              {/* Radial Bar 1 */}
              <div className={`${AboutMeStyle['bar']}`}>
                <div className={`${AboutMeStyle['progress-circle']} ${AboutMeStyle['communication']}`}>
                  <div className={`${AboutMeStyle['left-half-clipper']}`}>
                    <div className={`${AboutMeStyle['first50-bar']}`} />
                    <div className={`${AboutMeStyle['value-bar']}`} />
                  </div>
                </div>
                <span>{counter.number1}%</span>
                <h2>Communication</h2>
              </div>
              {/* Radial Bar 2 */}
              <div className={`${AboutMeStyle['bar']}`}>
                <div className={`${AboutMeStyle['progress-circle']} ${AboutMeStyle['leadership']}`}>
                  <div className={`${AboutMeStyle['left-half-clipper']}`}>
                    <div className={`${AboutMeStyle['first50-bar']}`} />
                    <div className={`${AboutMeStyle['value-bar']}`} />
                  </div>
                </div>
                <span>{counter.number2}%</span>
                <h2>Leadership</h2>
              </div>
              {/* Radial Bar 3 */}
              <div className={`${AboutMeStyle['bar']}`}>
                <div className={`${AboutMeStyle['progress-circle']} ${AboutMeStyle['teamwork']}`}>
                  <div className={`${AboutMeStyle['left-half-clipper']}`}>
                    <div className={`${AboutMeStyle['first50-bar']}`} />
                    <div className={`${AboutMeStyle['value-bar']}`} />
                  </div>
                </div>
                <span>{counter.number3}%</span>
                <h2>Travail d'équipe</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
