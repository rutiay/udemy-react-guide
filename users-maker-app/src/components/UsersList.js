import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul>
      {props.users.map((user, index) => (
        <UserItem key={index} name={user.name} age={user.age} />
      ))}
    </ul>
  );
};

export default UsersList;
