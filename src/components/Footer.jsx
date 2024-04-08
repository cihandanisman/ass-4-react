import React from "react";
import "../sass/Footer.scss";
const Footer = ({ user}) => {
  return (
    <div className="footer-table">
      <tr>
        <th>Firstname</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Age</th>
      </tr>
      {
        user.map((person, id) => (
          <tr key={id}>
            <div>{person.name.first}</div>
            <div>{person.email}</div>
            <div>{person.phone}</div>
            <div>{person.dob.age}</div>
          </tr>
        ))}
    </div>
  );
};

export default Footer;
