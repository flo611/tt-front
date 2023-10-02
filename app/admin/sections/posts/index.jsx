"use client";

import { PostContext } from "@/app/components/context/postProvider";
import AddPost from "./addPost";
import EditPost from "./editPost";
import { useState, useEffect,useContext } from "react";
import { UserContext } from "@/app/components/context/userProvider";
import { Token } from "@/app/components/tools/token";

const Posts = () => {
  const { user, setUser } = useContext(UserContext);
  const [postFields, setPostFields] = useState({
    AddPost: false,
    EditPost: false,

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
        <ul className="flex flex-col lg:flex lg:flex-row lg:justify-around ">
          <li
            className=" my-4 mx-10 flex justify-center bg-white text-red-600 rounded-full md:mx-60 md:py-2 lg:mx-10 lg:px-16 lg:py-2 lg:my-6 hover:text-white hover:bg-red-900"
            onClick={() => {
              setPostFields({
                AddPost: true,
                EditPost: false,
              });
            }}
          >
            Ajouter et Supprimer un post
          </li>
          <li
            className="mb-4 mx-10 flex justify-center bg-white text-red-600 rounded-full md:mx-60 md:py-2 lg:mx-10  lg:px-16 lg:my-6 hover:text-white hover:bg-red-900"
            onClick={() => {
              setPostFields({
                AddPost: false,
                EditPost: true,
              });
            }}
          >
            Editer un post
          </li>
        </ul>
      </nav>
      <div className="my-8">
        {postFields.AddPost ? <AddPost /> : null}
        {postFields.EditPost ? <EditPost /> : null}
      </div>
    </>
  );
};

export default Posts;
