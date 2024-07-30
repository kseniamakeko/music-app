import React, { Fragment } from "react";
import Modal from "../UI/Modal";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "./DeleteAlbum.module.css";

const DeleteAlbum = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location;
  const showPopup = state?.showPopup || false;
  const onSubmit = async (data) => {
    try {
      const formattedDate = moment(data.createdAt).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      const res = await fetch(`http://localhost:5000/albums/${data.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...data, createdAt: formattedDate })
      });
      if (res.ok) {
        navigate("/");
      } else if (!res.ok) {
        throw new Error("Failed to delete album data");
      }
    } catch (error) {
      console.error("Error delete album data:", error);
    }
  };

  return (
    <Fragment>
      {showPopup && (
        <Modal>
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
        </Modal>
      )}
    </Fragment>
  );
};

export { DeleteAlbum };
