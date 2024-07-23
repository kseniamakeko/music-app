import React from "react";
import { useForm } from "react-hook-form";
import classes from "./CreateAlbum.module.css";

const CreateAlbum = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
            type="year"
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

        {/* <label htmlFor="file">
          image
          <input
            type="file"
            id="image_url"
            {...register("file", {
              required: "File is required!"
            })}
          />
        </label>
        <div className={classes.errors}>
          {errors.image_url && <p>{errors.image_url.message}</p>}
        </div> */}

        <button type="submit" disabled={!isValid}>
          Create album
        </button>
      </form>
    </>
  );
};

export { CreateAlbum };
