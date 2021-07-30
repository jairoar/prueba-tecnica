import React from "react";

import "./styles/PageError.css";
import ErrImage from "../images/err.svg";

export default function PageError(props) {
  return (
    <div className="PageError">
      <img className="PageError__image" src={ErrImage} alt="Error" />
      {props.error.message}
    </div>
  );
}
