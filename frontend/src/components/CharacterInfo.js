import axios from "axios";
import React, { useState } from "react";

import Modal from "../components/Modal";

import "./styles/CharacterInfo.css";

export default function CharacterInfo(props) {
  const [isOpen, setIsOpen] = useState(false);

  const headers = { "Content-Type": "application/json" };

  const handleClick = async (e) => {
    setIsOpen(true);
    const idCharacter = e.target.id;
    await axios
      .post(
        "http://localhost:4000/addfavorite",
        { id_character: idCharacter },
        { headers }
      )
      .then((res) => "");
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
              <span className="fw-bold">Type: </span>
              {props.type ? props.type : "No available data"} <br />
              <span className="fw-bold">Gender: </span> {props.gender}
              <br />
              <div className="CharacterInfo__favbutton">
                <button
                  id={props.id}
                  onClick={handleClick}
                  className="btn btn-dark m-2"
                >
                  Add to favorites
                </button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                  Your character has been added to favorites
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
