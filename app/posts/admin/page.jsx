"use client";
import { useContext, useEffect, useState } from "react";
import { Post } from "@/app/components/tools/axios";
import { PostContext } from "@/app/components/context/postProvider";
import { Get, Delete } from "@/app/components/tools/axios";
import Link from "next/link";

const Admin = () => {
  const { posts, setPosts } = useContext(PostContext);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  Get("posts", (response) => {
    arr.push(response);
  });

  const headers = {
    headers: {
      Authorization:
        "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTU3MjE4MTYsImV4cCI6MTY5NTcyNTQxNiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.vNIrX8GxNSSFJQuLBxKILcdYhJ5cjIjXU9k4oz4KBkw__wiu-ZS1L5MXqI6QFgPlp3Aad27xDxDMTxRf5qw_MgS5uIjNiZyQT8FghFHCQjbfNm-tWjxg64_n1ZkldBD0pKJAPtmsRVfb3lm5S6aCyYswhF3-wciK_F1WBPDHjzhqulBulq17OwZdk3qTcgySFpidMctSCc0pbb6nfnn0AmW4ijI4qAH__mRzDewnqghuGdK-oSMiVUXTki30vXx-Y7GQCWUTVvlfgNJk1egUddKCfTx1ePjRP-e7vNA1odIj1KKYh5eE-PqFf9dKOM08INe0RraSNLL77oQIR-XHpQ",
    },
  };

  const data = {
    title: newPost.title,
    content: newPost.content,
  };

  return (
    <>
      <h1>Hello Admin</h1>
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
      <div>
        {/* {posts.map((post) => {
          return (
            <div key={post.id}>
              <div className="inline-flex py-2 ">
                <h1>{post.title}</h1>
                <h1>{post.state}</h1>
                <h1>{post.createdAt}</h1>
                <Link href={`/posts/${post.id}`} className="p-2 bg-green-500">
                  Modifier
                </Link>
                <button
                  type="button"
                  className="p-2 bg-red-500"
                  onClick={() => Delete("posts", post.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default Admin;
