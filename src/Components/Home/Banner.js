import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-front">
          {appName.toLowerCase()}
        </h1>
        <p>A place to share knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;