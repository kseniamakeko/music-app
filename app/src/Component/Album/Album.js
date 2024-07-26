import { useNavigate, useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classes from "./Album.module.css";
import SongsList from "./SongsList";

const Album = ({ albumCard, onClick }) => {
  const [songs, setSongs] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await fetch(`http://localhost:5000/albums/${id}/songs`);
        if (!res.ok) {
          throw new Error("it is impossible to connect! Check your Network");
        }
        const data = await res.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSongs();
  }, [id]);
  return (
    <div className={classes.album_container}>
      <div className={classes.album_left}>
        <button onClick={() => navigate(-1)}>Back</button>
        {albumCard?.image_url && (
          <img src={`http://localhost:5000/${albumCard.image_url}`} />
        )}
        <h3>{albumCard?.name}</h3>
        <h4>{albumCard?.authorName}</h4>
        <p>{new Date(albumCard?.createdAt).getFullYear()}</p>
        <p>{albumCard?.description}</p>
        <Link to={`/album/${id}/edit`}>Edit Album</Link>
      </div>
      <div className={classes.album_right}>
        <div className={classes.album_right}>
          <SongsList className={classes.songs_list} items={songs} />
        </div>
      </div>
    </div>
  );
};

export default Album;
