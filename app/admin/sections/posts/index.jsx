"use client"

import AddPost from "./addPost"
import EditPost from "./editPost";
import{useState} from "react"

const Posts = () => {
 
  const [postFields, setPostFields] = useState({
    AddPost: false,
    EditPost: false,
  });

  return (
    <>
  <nav>
        <ul className="flex flex-row justify-around ">
          <li
          className="bg-white text-red-600 rounded-full px-10 py-2 hover:text-white hover:bg-red-900"
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
          className="bg-white text-red-600 rounded-full px-10 py-2 hover:text-white hover:bg-red-900"
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
        {postFields.AddPost ? <AddPost/> : null}   
        {postFields.EditPost ? <EditPost /> : null}
      </div>
    </>
  );
};

export default Posts;
