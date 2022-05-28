import { useState } from "react";
import NewUser from "./components/NewUser";
import "./App.css";
import UsersList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewUser = (user) => {
    setUsersList((prevUsersList) => [user, ...prevUsersList]);
  };
  return (
    <div className="App">
      <NewUser onAddUser={addNewUser} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
