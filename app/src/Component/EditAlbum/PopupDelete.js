import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import moment from "moment";
import classes from "./PopupDelete.module.css";

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
    <>
      <Modal>
        <div className={classes.message}>
          <span>Are you sure to delete?</span>
        </div>
        <div className={classes.actions}>
          <button type="submit" className={classes.btn_yes} onSubmit={onSubmit}>
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
      </Modal>
    </>
  );
};

export default Popup;
