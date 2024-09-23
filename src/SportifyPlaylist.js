import React from "react";
import "./App.css";
import Asake from "./images/Asake.jpeg";
import Wizkid from "./images/wizkid.jpeg";
import Davido from "./images/davido.jpeg";

function SportifyPlaylist() {
  const playlists = [
    {
      image: Asake,
      title: "Daily Mix 1",
      artists: "Asake, Ruger, Libianca and more",
    },
    {
      image: Wizkid,
      title: "Daily Mix 2",
      artists: "Anendlessocean, Glowreeyah...",
    },
    {
      image: Davido,
      title: "Daily Mix 3",
      artists: "Ayo Maff, KAESTYLE, Muyee...",
    },
  ];

  return (
    <div className="playlist-grid">
      {playlists.map((playlist) => (
       
      ))}
    </div>
  );
}

function PlaylistItem({ image, title, artists }) {
  return (
    <div className="playlist-item">
      <img src={image} alt={title} className="playlist-image" />

      <div className="playlist-details">
        <h3>{title}</h3>
        <p>{artists}</p>
      </div>
    </div>
  );
}

export default SportifyPlaylist;
