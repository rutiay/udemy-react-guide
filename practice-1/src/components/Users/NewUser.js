import { useState } from "react";
import Message from "../UI/Message";
import Card from "../UI/Card";
import Button from "../UI/Button";
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
      setErrorMessage({
        title: "Invaid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setErrorMessage({
        title: "Invalid Age",
        message: "Please enter a valid age(< 0).",
      });
      return;
    }
    props.onAddUser({ name, age });
    setName("");
    setAge("");
  };

  const errorHandler = () => {
    setErrorMessage(null)
  }

  return (
    <div>
      {errorMessage && <Message error={errorMessage} onErrorHandler={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={newUserSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={name}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default NewUser;
