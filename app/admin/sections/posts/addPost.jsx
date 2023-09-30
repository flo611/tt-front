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

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTYwNjI2MzMsImV4cCI6MTY5NjA2NjIzMywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.iO061FNZ99j9QXVl6CruzWSvL9oluirZuIo1cLCeF6ivLY715bHMdKOwT0iOvX9-Qy2QKaLqV9_GP9KUwraGj571s0m7ylslhoSLm8vbUQlE6EJZ0ImsAaSCgxx5o5uz3mCP1jGQ5KQTWwsd7tjOUQ7NnaV37vHRekxF63e0ukDIbI7KUH0V6NNnGiWzuI1c-yoDY08t0oh_KYwkNx8U-dA9U2paTZh6Hg-FDuV4-jtjxTV3irtSKKJR3YXnD5zGZ1OPcVFQtn46hx1OUnVqGPHwyPKrq7GJNoSTX5IDbvy38VwHJCOmL1pTPFJChNIubWP9fxapR2NrwC3yvclCUQ";
  const config = {
    headers: {
      Authorization: `beater ${token}`,
    },
  };

  const data = {
    title: newPost.title,
    content: newPost.content,
  };

  useEffect(() => {
    Get("posts", config).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <nav>
        <ul className="flex flex-row justify-around underline">
          <li>Suppression Post</li>
          <li>Ajout Post</li>
        </ul>
      </nav>
      <div className="grid grid-cols-2 py-4">
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id} className="grid grid-cols-2 py-6 ">
                {post.id}
                Titre: {post.title}
                Contenu: {post.content}
                <button
                  className="bg-red-800 mx-20 rounded-lg "
                  type="button"
                  onClick={() =>
                    Delete("posts", post.id, config).then(() =>
                      alert("Post supprimé !")
                    )
                  }
                >
                  Supprimer
                </button>
              </div>
            );
          })}
        </div>

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
              className="bg-green-800 rounded-lg p-6"
              type="button"
              onClick={() =>
                Post("posts", data, config).then(() => alert("Post Crée !"))
              }
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPost;
