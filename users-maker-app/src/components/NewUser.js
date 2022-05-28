import { useState } from "react";
import Message from "./Message";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const newUserSubmitHandler = (event) => {
    event.preventDefault();
    if (!name.trim().length || !age.length) {
      setErrorMessage("Please enter a valid name and age (non-empty values).");
      return;
    }
    if (age < 0) {
      setErrorMessage("Please enter a valid age(< 0).");
      return;
    }
    props.onAddUser({ name, age });
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={newUserSubmitHandler}>
      <label>Username</label>
      <input type="text" value={name} onChange={nameChangeHandler} />
      <label>Age (Years)</label>
      <input type="number" value={age} onChange={ageChangeHandler} />
      <button type="submit">Add User</button>
      {errorMessage && <Message message={errorMessage} />}
    </form>
  );
};

export default NewUser;
