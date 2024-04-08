import React, { useState, useEffect } from "react";
import logo1 from "../assets/man.svg";
import logo2 from "../assets/mail.svg";
import logo3 from "../assets/growing-up-man.svg";
import logo4 from "../assets/map.svg";
import logo5 from "../assets/phone.svg";
import logo6 from "../assets/padlock.svg";
import "../sass/Main.scss";
import axios from "axios";
import Footer from "../components/Footer";

const Main = () => {
  const [user, setUser] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [addNewUser, setAddNewUser] = useState(true);
  const [info, setInfo] = useState();
  const url = "https://randomuser.me/api/";

  const getUser = async () => {
    try {
      const response = await axios(url);
      console.log(response.data.results);
      setUser(response.data.results);
      setInfo(
        <div style={{ textAlign: "center" }}>
          My name is: <br />
          {response.data.results[0].name.first}{" "}
          {response.data.results[0].name.last}
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  // setAddNewUser(false)
  const addUser = () => {
    setAllUser([...user, ...allUser]);
  };
  console.log(allUser);

  useEffect(() => {
    getUser();
  }, []);

  const personName = (fullName) => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My name is: <br />
        {fullName}
      </div>
    );
  };
  const personEmail = (e) => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My email is: <br />
        {e}
      </div>
    );
  };
  const personAge = (e) => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My age is: <br />
        {e}
      </div>
    );
  };
  const personStreet = (e) => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My street is: <br />
        {e}
      </div>
    );
  };
  const personPhone = (e) => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My phone is: <br />
        {e}
      </div>
    );
  };
  const personPassword = (e) => {
    setInfo(
      <div style={{ textAlign: "center" }}>
        My password is: <br />
        {e}
      </div>
    );
  };
  // getUser();
  const isDisabled = allUser.some((item) => item.email === user[0].email);
  // console.log(isDisabled);
  return (
    <div>
      {user.map((person) => (
        <div className="main">
          <div className="main-user">
            <img
              style={{ borderRadius: "50%" }}
              src={person.picture.large}
              alt=""
              width={"70px"}
            />
          </div>
          <div className="main-info">
            <p>{info}</p>
          </div>
          <div className="main-logos">
            <img
              width={"30px"}
              onMouseOver={() =>
                personName(`${person.name.first} ${person.name.last}`)
              }
              src={logo1}
              alt=""
            />
            <img
              width={"30px"}
              onMouseOver={() => personEmail(person.email)}
              src={logo2}
              alt=""
            />
            <img
              width={"30px"}
              onMouseOver={() => personAge(person.dob.age)}
              src={logo3}
              alt=""
            />
            <img
              width={"30px"}
              onMouseOver={() => personStreet(person.location.street.name)}
              src={logo4}
              alt=""
            />
            <img
              width={"30px"}
              onMouseOver={() => personPhone(person.phone)}
              src={logo5}
              alt=""
            />
            <img
              width={"30px"}
              onMouseOver={() => personPassword(person.login.password)}
              src={logo6}
              alt=""
            />
          </div>
          <div className="main-buttons">
            <button onClick={getUser}>NEW USER</button>
            <button onClick={addUser} disabled={isDisabled}>
              ADD USER
            </button>
          </div>
        </div>
      ))}
      <Footer user={allUser} addNewUser={addNewUser} />
    </div>
  );
};

export default Main;
