import React from "react";
import GrillaGames from "../GrillaGames";
import SpotifyPlaylist from "../SpotifyPlaylist"

export const History = () => {
  return (
    <div className="history">
      <h1>History of Grand Theft Auto</h1>
      <p>All the Grand Theft Auto Games</p>
      <GrillaGames/>
      <SpotifyPlaylist/>
    </div>
  );
};
