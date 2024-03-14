import { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [nameInputError, setNameInputError] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("name must be at least 2 characters long");
    } else {
      setNameInputError("");
    }
  }, [name]);

  const handleSubmit = (event) => {
    console.log(name);
    console.log(age);
    console.log(hairColor);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(event) => setHairColor(event.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
