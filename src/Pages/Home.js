import React from 'react';
import{ Trans } from 'react-i18next';

function Home(props) {
  return (
    <div className='home-page'>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Home;