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
        <ul className="flex flex-row justify-around">
          <li
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
