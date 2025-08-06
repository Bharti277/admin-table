import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./store/slices/UserSlice";

const DisplayUser = () => {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log("🚀 ~ DisplayUser ~ data:", data);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      {data.map((user, index) => (
        <li key={index}>
          {user} <button onClick={() => deleteUser(index)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default DisplayUser;
