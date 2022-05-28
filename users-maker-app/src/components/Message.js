import styles from './Message.module.css';

const Message = (props) => {
    return (
        <div>
            {props.message}
            <button type='button' onClick={props.onErrorHandler}>Okay</button>
        </div>
    );
};

export default Message;