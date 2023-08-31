import React from "react";
import ContactInfo from "./contactInfo";

function Card(props) {
  return (
    <div className="Card">
      <div className="card-img">
        <img className="rounding" src={props.img} alt="dummy" />
      </div>
      <div>
        <h2 className="name">{props.name}</h2>
        <ContactInfo itemLabel="contact" itemValue={props.tel} />
        <ContactInfo itemLabel="email" itemValue={props.email} />
        <ContactInfo itemLabel="company" itemValue={props.company} />
      </div>
    </div>
  );
}

export default Card;
