import React from 'react';
import { NavLink } from 'react-router-dom';

export const Error = () => {
  return (
    <section id="error-page" className="error">
      <div className="error__container errorcontainer">
        <div className="error__data">
          <span className="errorfont">Error 404</span>
          <h1 className="error__title">Hey Buddy</h1>
          <p className="error__description">
            We can't seem to find the page <br /> you are looking for.
          </p>
          <div>
            <NavLink to="/"><button className="error__button">Home</button></NavLink>
            {/* <NavLink to="/contact"><button className="btn secondary-btn">Report Problem</button></NavLink> */}
          </div>
        </div>
        <div className="error__img">
          <img src="../../public/ghost-img.png" alt="Ghost" />
          <div className="error__shadow"></div>
        </div>
      </div>
      {/* <footer className="error__footer">
        
      </footer> */}
    </section>
  );
};

