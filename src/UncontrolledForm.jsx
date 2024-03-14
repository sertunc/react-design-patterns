import { createRef } from "react";

export const UncontrolledForm = () => {
  const nameInput = createRef();
  const ageInput = createRef();
  const hairColorInput = createRef();

  const handleSubmit = (event) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" ref={nameInput} />
      <input type="text" name="age" placeholder="Age" ref={ageInput} />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
