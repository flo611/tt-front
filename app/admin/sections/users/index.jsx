"use client";
import ShowUser from "./functions/showUser";
import AddUser from "./functions/addUser";
import EditUser from "./functions/editUser";
import DeleteUser from "./functions/deleteUser";
import { useState } from "react";

const Users = () => {
  const [userFields, setUserFields] = useState({
    showUser: false,
    addUser: false,
    editUser: false,
    deleteUser: false,
  });

  return (
    <>
      <nav>
        <ul className="flex flex-row justify-around">
          <li
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
