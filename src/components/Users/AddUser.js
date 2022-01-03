import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";
import { useState, Fragment, useRef } from "react";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    // check for empty input
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input (empty values)",
        message: "Both username and age are required!",
      });
      return;
    }
    // check if it is a valid age (a positive number!)
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Age should be a positive number (>= 1)",
      });
      return;
    }
    // validation ok...
    console.log(`User ${enteredUsername} added! Age: ${enteredAge}`);
    props.onAddUser(enteredUsername, enteredAge);
    // reset form
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // remove error modal
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
