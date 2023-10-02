"use client";
import ShowUser from "./functions/showUser";
import AddUser from "./functions/addUser";
import EditUser from "./functions/editUser";
import DeleteUser from "./functions/deleteUser";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "@/app/components/context/userProvider";
import { Token } from "@/app/components/tools/token";

const Users = () => {
  const { user, setUser } = useContext(UserContext);
  const [userFields, setUserFields] = useState({
    showUser: false,
    addUser: false,
    editUser: false,
    deleteUser: false,
  });

  useEffect(() => {
    // console.log(user);
    Token(user.email, user.plainPassword).then((response) =>
      setUser({ ...user, token: response.data.token })
    );
    console.log(user);

  }, []);

  return (
    <>
      <nav>
        <ul className="flex flex-row justify-around">
          <li
            className="bg-white text-red-600 rounded-full px-10 py-2 hover:text-white hover:bg-red-900"
            onClick={() => {
              setUserFields({
                showUser: true,
                addUser: false,
                editUser: false,
                deleteUser: false,
              });
            }}
          >
            Afficher les utilisateurs
          </li>
          <li
            className="bg-white text-red-600 rounded-full px-10 py-2 hover:text-white hover:bg-red-900"
            onClick={() => {
              setUserFields({
                showUser: false,
                addUser: true,
                editUser: false,
                deleteUser: false,
              });
            }}
          >
            Ajouter les utilisateurs
          </li>
          <li
            className="bg-white text-red-600 rounded-full px-10 py-2 hover:text-white hover:bg-red-900"
            onClick={() => {
              setUserFields({
                showUser: false,
                addUser: false,
                editUser: true,
                deleteUser: false,
              });
            }}
          >
            Modifier les utilisateurs
          </li>
          <li
            className="bg-white text-red-600 rounded-full px-10 py-2 hover:text-white hover:bg-red-900"
            onClick={() => {
              setUserFields({
                showUser: false,
                addUser: false,
                editUser: false,
                deleteUser: true,
              });
            }}
          >
            Supprimer les utilisateurs
          </li>
        </ul>
      </nav>
      <div className="my-8">
        {userFields.showUser ? <ShowUser /> : null}
        {userFields.addUser ? <AddUser /> : null}
        {userFields.editUser ? <EditUser /> : null}
        {userFields.deleteUser ? <DeleteUser /> : null}
      </div>
    </>
  );
};

export default Users;
