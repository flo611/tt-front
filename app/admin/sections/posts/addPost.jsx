import { useContext, useEffect, useState } from "react";
import { Post } from "@/app/components/tools/axios";
import { PostContext } from "@/app/components/context/postProvider";
import { Get, Delete } from "@/app/components/tools/axios";
import EditPost from "@/app/admin/sections/posts/editPost";
import Button from "@/app/components/tools/button";

const AddPost = () => {
  const { posts, setPosts } = useContext(PostContext);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTYwODc1NjMsImV4cCI6MTY5NjA5MTE2Mywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.UN7D57ugkI-4nNIiS3HbFrPZMBmp2A6gPv69Yl7M8xO0HinxWaHJ0o29YmOmuA3L9d9OT9Hir2NUoPhrfu_HUZMyo3h7VIpOER9J53BRiqjK3uMSTrI0ukcaCWNDIHlSqstH9oM9eEqqXMCtS8N08njquqZGWH0hgDskOyG6ROMbzexki4Ia8MLJEFm90_uAqOasQoNd09oXf_SSGhZSz7YJ3ATykC_jyWabu9h29TZ-RFRmMpfY4XEb3ZbeTeurlIF7a4St90Gb8T9Lf1_LKUiIq3xAwc4PM2BNnMYEOG6q1V69Ov4DThn9jRCEGosqsiHyA7TQKSJe9QA_TjLGbw";
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
      <div className="grid grid-cols-2 py-4 ">
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <div className="card m-6">
                  <div className="grid grid-cols-2 m-10 contain ">
                    <div className="ml-2 my-4">
                      {post.id}
                      Titre: {post.title}
                      Contenu: {post.content}
                    </div>
                    <div className="flex justify-center my-10">
                      <button
                      className="bg-white text-red-600  justify-center items-center rounded-full px-6 py-2  hover:text-white hover:bg-red-900 "
                        type="button"
                        onClick={() =>
                          Delete("posts", post.id, config).then(() =>
                            alert("Post supprimé !")
                          )
                        }
                      >
                      supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div >
          <form action="" className="card mx-20 mt-6 " >
            <div className="contain flex flex-col mx-10 my-10 py-10">
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
            
            <div className="flex justify-center">
            <Button
              type="button"
              value="Envoyer"
              onClick={() =>
                Post("posts", data, config).then(() => alert("Post Crée !"))
              }
            />

            </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPost;
