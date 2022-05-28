import { useState } from "react";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const newUserSubmitHandler = (event) => {
      event.preventDefault();
      props.onAddUser({name, age})
      setName('');
      setAge('');
  }

  return (
    <form onSubmit={newUserSubmitHandler}>
      <label>Username</label>
      <input type="text" value={name} onChange={nameChangeHandler} />
      <label>Age (Years)</label>
      <input type="number" value={age} onChange={ageChangeHandler} min={10} max={99}/>
      <button type="submit">Add User</button>
    </form>
  );
};

export default NewUser;
