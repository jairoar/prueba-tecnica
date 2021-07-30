import axios from "axios";
import React, { useState } from "react";

import Modal from "../components/Modal";

import "./styles/FavoritesInfo.css";

export default function FavoritesInfo(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = async (e) => {
    setIsOpen(true);
    const idCharacter = e.target.id;
    console.log(idCharacter);
    await axios
      .delete(`http://localhost:4000/delfavorite/${idCharacter}`)
      .then(() => window.location.reload());
  };

  return (
    <div>
      <div className="col">
        <div className="card">
          <img
            src={props.image}
            className="card-img-top"
            alt="CharacterAvatar"
          />
          <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
            <div className="card-text">
              <span className="fw-bold">Status: </span> {props.status} <br />
              <span className="fw-bold">Species: </span> {props.species} <br />
              <span className="fw-bold">Type: </span>{" "}
              {props.type ? props.type : "No available data"} <br />
              <span className="fw-bold">Gender: </span> {props.gender}
              <br />
              <div className="FavoriteInfo__favbutton">
                <button
                  onClick={handleClick}
                  id={props.id}
                  className="btn btn-danger m-2"
                >
                  Delete this character from favs!
                </button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                  Your character has been removed from favorites
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
