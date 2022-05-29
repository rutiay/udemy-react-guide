import { useState } from "react";
import NewUser from "./components/Users/NewUser";
import UsersList from "./components/Users/UsersList";

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
