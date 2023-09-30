"use client";
import { useState } from "react";

import Posts from "./sections/posts";
import Users from "./sections/users";
import { FcHome } from "react-icons/fc";
import "../assets/css/styles.css"

const Admin = () => {
  const [showFields, setShowFields] = useState({
    posts: false,
    users: false,
  });

  return (
    <>
      <button className="flex w-full justify-center text-4xl bg-red-900 py-6">
        <a href="http://localhost:3000/">
          <FcHome />
        </a>
      </button>
      <h1 className="flex justify-center text-xl text-red-500  my-10 uppercase underline">Hello Admin</h1>
      <div className="grid grid-cols-4">
        <div className="flex flex-col">
          <button
          className="bg-white text-red-600 rounded-full px-10 py-2 hover:text-white hover:bg-red-900 mx-20"
            onClick={() => {
              setShowFields({
                posts: true,
                users: false,
              });
            }}
          >
            Posts
          </button>
          <button
          className="bg-white text-red-600 rounded-full px-10 py-2 hover:text-white hover:bg-red-900 mx-20 mt-6"
            onClick={() => {
              setShowFields({
                posts: false,
                users: true,
              });
            }}
          >
            Users
          </button>
        </div>
        <div className="col-span-3">
          {showFields.posts ? <Posts /> : null}
          {showFields.users ? <Users /> : null}
        </div>
      </div>
    </>
  );
};

export default Admin;
