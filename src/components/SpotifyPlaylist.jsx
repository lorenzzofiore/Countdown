import "./SpotifyPlaylist.css";
import PlaylistViceCity from './PlaylistViceCity'
import PlaylistSanAndreas from './PlaylistSanAndreas'
import PlaylistIII from './PlaylistIII'

export default function SpotifyPlaylist() {
  return (
    <section id="spotify-playlist">
        <h2 className="title-playlist">
            Listen all the games playlists on <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">Spotify</a>
        </h2>
      <PlaylistIII/>
      <PlaylistViceCity/>
      <PlaylistSanAndreas/>
    </section>
  );
}
