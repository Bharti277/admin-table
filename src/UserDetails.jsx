import React from "react";
import styles from "./UserDetails.module.scss";
import { fakeUserData } from "./api";
import { useDispatch } from "react-redux";
import { addUser, removeAllUsers } from "./store/slices/UserSlice";
import DisplayUser from "./DisplayUser";

const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    console.log(payload, "added to the list");
    dispatch(addUser(payload));
  };

  const clearAllUsers = () => {
    dispatch(removeAllUsers());
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.heading}>List of User Details</h2>
        <button
          className={styles.addBtn}
          onClick={() => addNewUser(fakeUserData())}
        >
          Add New User
        </button>
      </div>
      <div className={styles.listSection}>
        <DisplayUser />
        <button className={styles.clearBtn} onClick={clearAllUsers}>
          Clear All User
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
