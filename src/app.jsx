import React from "react";
import Card from "./card";
import contacts from "./contact";

function addCard(Contact) {
  return (
    <Card
      name={Contact.name}
      tel={Contact.tel}
      img={Contact.imgURL}
      email={Contact.email}
      company={Contact.company}
    />
  );
}

function App() {
  return (
    <div className="cardcontainer">
      <h1 className="heading">My contact</h1>
      {contacts.map(addCard)}
    </div>
  );
}
export default App;
