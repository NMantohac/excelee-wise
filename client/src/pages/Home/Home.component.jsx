import React from 'react';
import HomeJumbotron from '../../components/HomeJumbotron/HomeJumbotron.component';
import HomeContent from '../../components/HomeContent/HomeContent.component';
import './Home.styles.css';

const Home = () => {
  return (
    <div>
      <HomeJumbotron />
      <hr />
      <HomeContent />
    </div>
  );
};

export default Home;
