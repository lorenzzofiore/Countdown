/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const SpotifyPlaylistEmbed = () => {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src="https://open.spotify.com/embed/playlist/2kTpP9WLwc3HjI90coGIOe?utm_source=generator"
      width="80%"
      height="152"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyPlaylistEmbed;
