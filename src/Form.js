import React, { useState } from "react";
import { Normal, Number } from "./stories/Input.stories";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState({});
  const [ageError, setAgeError] = useState({});
  const [emailError, setEmailError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      setNameError = "";
      setAgeError = "";
      setEmailError = "";
    }
  };

  const formValidation = () => {
    const nameError = {};
    const ageError = {};
    const emailError = {};
    let isValid = true;

    if (name.trim().length === 0) {
      nameError.nameEmpty = "This field is empty.";
      isValid = false;
    }

    if (age.trim().length === 0) {
      ageError.ageEmpty = "This field is empty.";
      isValid = false;
    }

    if (email.trim().length === 0) {
      emailError.emailEmpty = "This field is empty.";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.emailWrongInput = "This email format is wrong.";
      isValid = false;
    }
    setNameError(nameError);
    setAgeError(ageError);
    setEmailError(emailError);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <Normal
        label="Name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br></br>
      {Object.keys(nameError).map((key) => {
        return <p style={{ color: "red" }}>{nameError[key]}</p>;
      })}

      <Number
        label="Age"
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br></br>
      {Object.keys(ageError).map((key) => {
        return <p style={{ color: "red" }}>{ageError[key]}</p>;
      })}

      <Normal
        label="Email"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {Object.keys(emailError).map((key) => {
        return <p style={{ color: "red" }}>{emailError[key]}</p>;
      })}
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};
export default ControlledForm;
