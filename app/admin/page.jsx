"use client";
import { useState } from "react";

import Posts from "./sections/posts";
import Users from "./sections/users";
import { FcHome } from "react-icons/fc";


const Admin = () => {
  const [showFields, setShowFields] = useState({
    posts: false,
    users: false,
  });

  return (
    <>
      <button className="flex w-full justify-center text-4xl">
        <a href="http://localhost:3000/">
          <FcHome />
        </a>
      </button>
      <h1 className="uppercase text-center my-6 font-bold text-2xl">Hello Admin</h1>
      <div className="grid grid-cols-4">
        <div className="flex flex-col">
          <button
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
