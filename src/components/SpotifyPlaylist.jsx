import "./SpotifyPlaylist.css";
import PlaylistViceCity from './PlaylistViceCity'

export default function SpotifyPlaylist() {
  return (
    <section id="spotify-playlist">
        <h2 className="title-playlist">
            Listen all the games playlists on Spotify
        </h2>
      <PlaylistViceCity/>
    </section>
  );
}
