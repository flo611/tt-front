import { useContext, useEffect, useState } from "react";
import { Post } from "@/app/components/tools/axios";
import { PostContext } from "@/app/components/context/postProvider";
import { Get, Delete } from "@/app/components/tools/axios";
import EditPost from "@/app/admin/sections/posts/editPost";

const AddPost = () => {
    const { posts, setPosts } = useContext(PostContext);
    const [newPost, setNewPost] = useState({
      title: "",
      content: "",
    });
  
    const headers = {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTU5MjQ2NTEsImV4cCI6MTY5NTkyODI1MSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.MZahMUqOpW_tThcEFO6peQtpyJ5vW4srUwvZ2VoAY2tR5VKnLkBEhB9U4N0tKC0IBlcCOr4WydvbwaOapNM3wl4OBBfvGoMYsjGc9dve0Xx1xvKQzS1Y0LBV_Uy-8LDlRGLWc2FtQ4iH9Ypr4Ifuzb3eUd7olM4W3lYj16Hy2hVena0qfFk7UCSbU86A6ZhEARvd-zeU5YbLHyc_OWzON5NMTRY58nqpsDMtUiAgxkUxIDjNmKbZ94Hfx52M3a0o6q2hhrMSxoczd28_HPxj_WEQL_yVRa941n1pZtHPOglbShxPZhgeL0APidUah4TK8nLCaXbYFIPSP0LUWmc8NA",
      },
    };
  
    const data = {
      title: newPost.title,
      content: newPost.content,
    };
    return (
      <>
        <h1>addPost</h1>
        <div>
        <form action="">
          <label htmlFor="">Titre</label>
          <input
            type="text"
            onChange={(event) =>
              setNewPost({ ...newPost, title: event.target.value })
            }
          />
          <label htmlFor="">Contenu</label>
          <input
            type="text"
            onChange={(event) =>
              setNewPost({ ...newPost, content: event.target.value })
            }
          />

          <button
            type="button"
            onClick={() =>
              Post("posts", data, headers).then(() => alert("Post Crée !"))
            }
          >
            Envoyer
          </button>
          <button
            className="px-6"
            type="button"
            onClick={() =>
              Delete("posts", data.id, headers).then(() =>
                alert("Post supprimé !")
              )
            }
          >
            Supprimer
          </button>
        </form>
      </div>
      </>
    );
  };
  
  export default AddPost;
  