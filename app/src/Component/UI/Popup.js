import { Fragment } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import classes from "./Popup.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Popup = (props) => {
  const navigate = useNavigate();
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
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Popup;
