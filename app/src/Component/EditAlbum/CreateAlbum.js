import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useForm } from "react-hook-form";
import classes from "./CreateAlbum.module.css";

const CreateAlbum = ({ onAlbumCreated }) => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = async (data) => {
    try {
      const formattedDate = moment(data.createdAt).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      const res = await fetch("http://localhost:5000/albums", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...data, createdAt: formattedDate })
      });
      if (!res.ok) {
        throw new Error("Failed to update album data");
      }
      const result = await res.json();
      onAlbumCreated(result);
      navigate("/");
    } catch (error) {
      console.error("Error updating album data:", error);
    }
  };

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
          Create album
        </button>
      </form>
    </>
  );
};

export { CreateAlbum };
