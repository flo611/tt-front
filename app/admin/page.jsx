"use client";
import { useState } from "react";

import Posts from "./sections/posts";
import Users from "./sections/users";
import { FcHome } from "react-icons/fc";
import "../assets/css/styles.css";
import Button from "../components/tools/button";

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
      
      <h1 className="flex justify-center text-xl text-red-500  my-10 uppercase underline">
        Hello Admin
      </h1>
      <div className="flex flex-col lg:grid lg:grid-cols-4 ">
        <div className="flex flex-col">
          <Button
            type="button"
            value="Post"
            onClick={() => {
              setShowFields({
                posts: true,
                users: false,
              });
            }}
          />

          <Button
            type="button"
            value="User"
            onClick={() => {
              setShowFields({
                posts: false,
                users: true,
              });
            }}
          />
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
