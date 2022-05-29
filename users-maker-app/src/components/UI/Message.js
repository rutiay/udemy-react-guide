import Button from "./Button";
import Card from "./Card";
import styles from "./Message.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onErrorHandler}/>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.error.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onErrorHandler}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default Message;
