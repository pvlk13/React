import UserContext from "../context/UserContext";
import React, { useContext, useState } from "react";
import UserContextProvider from "../context/UserContextProvider";

function Login() {
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => {
          setuserName(e.target.value);
        }}
      />
      {"  "}
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
