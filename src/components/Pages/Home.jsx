import React from "react";
import CountdownTimer from "../Countdown";

export const Home = () => {
  return (
    <div className="home">
      <a className='logo-home' target="_blank" rel="noreferrer" href="https://www.rockstargames.com/videos/666666">
        <img className='logo-gta' src='logo_gta.png' alt="Grand Theft Auto VI" />
      </a>
      <h1 className="title">RELEASE DATE</h1>
      <CountdownTimer />
      <p className="release-date">COMING IN SEPTEMBER 2025</p>
      <a href='https://countdowngtavi.netlify.app/history' className="new-games">
        <i class="bi bi-arrow-right-circle"></i> 
        See all  
        <img src="logo-gta.svg" alt="Logo Grand Theft Auto" />
      </a>
    </div>
  );
};
