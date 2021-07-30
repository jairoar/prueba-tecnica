import React from "react";

import "./styles/PageError.css";
import SadImage from "../images/sad.svg";

export default function PageMessage(props) {
  return (
    <div className="PageError">
      <img className="PageError__image" src={SadImage} alt="Error" />
      <h3>{props.message}</h3>
    </div>
  );
}
