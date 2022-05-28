import styles from './UserItem.module.css';

const UserItem = (props) => {
    return (
        <li>
            <p>{props.name} ({props.age} years old)</p>
        </li>
    );
};

export default UserItem;