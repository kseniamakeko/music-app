import React, { useEffect } from "react";
import moment from "moment";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./EditAlbum.module.css";

const EditAlbum = ({ albumCards, onUpdateAlbum }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = async (data) => {
    try {
      const formattedDate = moment(data.createdAt).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      const res = await fetch(`http://localhost:5000/albums/${data.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...data, createdAt: formattedDate })
      });
      if (res.ok) {
        navigate(`/album/${id}`);
        onUpdateAlbum(data);
      } else if (!res.ok) {
        throw new Error("Failed to update album data");
      }
    } catch (error) {
      console.error("Error updating album data:", error);
    }
  };

  useEffect(() => {
    const albumCard = albumCards.find((card) => card.id === Number(id));
    if (albumCard) {
      albumCard.createdAt = moment(albumCard.createdAt).format("YYYY-MM-DD");
    }
    reset(albumCard);
  }, [id, albumCards]);

  return (
    <>
      <form className={classes.from} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          album name
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "Please, enter album name"
            })}
          />
        </label>
        <div className={classes.errors}>
          {errors?.name && <p>{errors?.name.message || "Error!"}</p>}
        </div>

        <label htmlFor="authorName">
          author
          <input
            id="authorName"
            type="text"
            {...register("authorName", {
              required: "Please, enter author album name"
            })}
          />
        </label>
        <div className={classes.errors}>
          {errors?.authorName && (
            <p>{errors?.authorName.message || "Error!"}</p>
          )}
        </div>

        <label>
          year
          <input
            id="createdAt"
            type="date"
            {...register("createdAt", {
              required: "Please, enter year release album",
              valueAsDate: true
            })}
          />
        </label>
        <div className={classes.errors}>
          {errors?.createdAt && <p>{errors?.createdAt.message || "Error!"}</p>}
        </div>

        <label htmlFor="description">
          description
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required!"
            })}
          />
        </label>
        <div className={classes.errors}>
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <button type="submit" disabled={!isValid}>
          Save Changes
        </button>
      </form>
    </>
  );
};

export { EditAlbum };
