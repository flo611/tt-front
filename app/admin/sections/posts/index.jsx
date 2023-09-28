import { useContext, useEffect, useState } from "react";
import { Post } from "@/app/components/tools/axios";
import { PostContext } from "@/app/components/context/postProvider";
import { Get, Delete } from "@/app/components/tools/axios";
import Link from "next/link";

const Posts = () => {
  const { posts, setPosts } = useContext(PostContext);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  const headers = {
    headers: {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTU4ODUyMTAsImV4cCI6MTY5NTg4ODgxMCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.C8IWGGoW5ALDul_DeVWrUWS0T3Rxl20D5RHn7nPwkW27PYfuqATnMdZzi_uaDPsT5gCuuOs4vFhdH2jaeaffr8qX_bxL7ZS2bt09LmE_74UzomPU8nrdqmt8b77n6SC0Fh1gJ77wSdjjyYM0YrVJrJxWg4bQBRRhcgaybHLdI0EeigdQuV5NtcnMhRpCVRe_HXGKrwW4q5UXVzFly0nWp7wHwJ6k4zaMMtbQgCKFezYHBXjSp9X6q4ImhxoAoC6plWHiO8weCUmIFKdlDi2nB7DTYbMEljiWqaGztDyYeJfP6SlB6EXPxVLS3RAKyIW7clLlwB_Fsgt4XJIaW6vdWQ",
    },
  };

  const data = {
    title: newPost.title,
    content: newPost.content,
  };

  return (
    <>
      <h1>Posts</h1>
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
          <button type="button" onClick={() => Post("posts", data, headers)}>
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
};

export default Posts;
