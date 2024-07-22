import { useParams } from "react-router-dom";
import { Fragment } from "react";
import Album from "./Album/Album";

const CreateAlbum = () => {
  const { id } = useParams();
  return (
    <Fragment>
      <Album>
        {id}
        <button>Create new album</button>
      </Album>
    </Fragment>
  );
};

export { CreateAlbum };
