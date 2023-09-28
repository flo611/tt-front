"use client";
const { useState, createContext } = require("react");

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    roles: [""],
    plainPassword: "",
    surname: "",
    token: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
