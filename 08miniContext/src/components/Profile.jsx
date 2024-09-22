import React from "react";
import Login from "./Login";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login!!</div>;
  return <div>Hello {user.username}</div>;
}

export default Profile;
