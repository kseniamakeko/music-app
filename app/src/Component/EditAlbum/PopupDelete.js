import { useNavigate } from "react-router-dom";
import classes from "./PopupDelete.module.css";

const Popup = (props) => {
  const navigate = useNavigate();

  const onSubmit = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/albums/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        props.onDeleteAlbum(id);
        navigate("/");
      } else if (!res.ok) {
        throw new Error("Failed to delete album data");
      }
    } catch (error) {
      console.error("Error delete album data:", error);
    }
  };
  return (
    <div className={classes.backdrop} onClick={props.onHidePopup}>
      <div className={classes.container}>
        <div className={classes.message}>
          <span>Are you sure you want to delete?</span>
        </div>
        <div className={classes.actions}>
          <button
            type="submit"
            className={classes.btn_yes}
            onClick={() => onSubmit(props.id)}
          >
            Yes
          </button>
          <button
            type="button"
            className={classes.btn_no}
            onClick={props.onHidePopup}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
