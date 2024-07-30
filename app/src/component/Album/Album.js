import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import classes from "./Album.module.css";
import SongsList from "./SongsList";

const Album = ({ albumCards }) => {
  const [songs, setSongs] = useState([]);
  const [albumCard, setAlbumCard] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location;
  const showPopup = state?.showPopup || false;

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

  useEffect(() => {
    const card = albumCards.find((album) => album.id === Number(id));
    if (card) {
      setAlbumCard(card);
    }
  }, [id, albumCards]);

  return (
    <Fragment>
      {showPopup && (
        <Popup>
          <div className={classes.message}>
            <span>{props.message}</span>
          </div>
          <div className={classes.actions}>
            <button
              type="submit"
              className={classes.btn_yes}
              onSubmit={onSubmit}
            >
              Yes
            </button>
            <button type="button" className={classes.btn_no}>
              No
            </button>
          </div>
        </Popup>
      )}
      <div className={classes.album_container}>
        <div className={classes.album_left}>
          <div className={classes.btn_container}>
            <button onClick={() => navigate("/")}>Back</button>
            <div className={classes.btns}>
              <Link className={classes.btn} to={`/album/${id}/edit`}>
                Edit Album
              </Link>
              <Link
                className={classes.btn_delete}
                to={{
                  pathname: `delete`,
                  state: { showPopup: true }
                }}
              >
                Delete Album
              </Link>
            </div>
          </div>
          {albumCard?.image_url && (
            <img src={`http://localhost:5000/${albumCard.image_url}`} />
          )}
          <h3>{albumCard?.name}</h3>
          <h4>{albumCard?.authorName}</h4>
          <p>{new Date(albumCard?.createdAt).getFullYear()}</p>
          <p>{albumCard?.description}</p>
        </div>
        <div className={classes.album_right}>
          <div className={classes.album_right}>
            <SongsList className={classes.songs_list} items={songs} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Album;
