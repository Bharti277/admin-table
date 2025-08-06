import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./store/slices/UserSlice";
import styles from "./DisplayUser.module.scss";

const DisplayUser = () => {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>User List</h2>
      <ul className={styles.userList}>
        {data.length === 0 && <li className={styles.empty}>No users found.</li>}
        {data.map((user, index) => (
          <li className={styles.userItem} key={index}>
            <span className={styles.userName}>{user}</span>
            <button
              className={styles.deleteBtn}
              onClick={() => deleteUser(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayUser;
