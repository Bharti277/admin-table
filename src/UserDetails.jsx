import React from "react";
import "./UserDetails.scss";
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
    <>
      <div className="user-details">
        <h2>List of User Details</h2>
        <button className="btn" onClick={() => addNewUser(fakeUserData())}>
          Add New User
        </button>
      </div>
      <div>
        <ul>
          <DisplayUser />
        </ul>
        <button onClick={clearAllUsers}>Clear All User</button>
      </div>
    </>
  );
};

export default UserDetails;
