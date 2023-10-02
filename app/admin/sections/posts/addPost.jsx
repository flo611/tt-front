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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTYyMzAxMzEsImV4cCI6MTY5NjIzMzczMSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.hHMcEM9I7NFV3KnTRTbwp3ovorW3YTXh9w6ytEzXM40XEY-k3NfC2u89qhizdJnTf23opfgG1JWoQIlJoWs72-kgI0EBxpA5J-PW2FLDgQhIXPpFYK2DqbXAWse0mVOluuZFVucsrwzkQUfMmFyiUQBPmOdfjPkhcj66rhFOovXeW2yyxbxyDuDjhUtBA3xHImr7RtQuDXlYmQty9LCwF8-hMVC4o5zRhG0Vza-wExdWbkUwiFbg7dGsJsVR06hPNW_w2eYxAKD9e8GTokVuKHnCqPgScM8IEHW_l8BJhIqIlWqqi37tpeJXA_l-i-_VnpfVSSDLpoqOTq7B_Q4VsA";
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
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
          <li>Ajout Post</li>
          <li>Suppression Post</li>
        </ul>
      </nav>
      <div className="flex flex-col lg:grid lg:grid-cols-2 py-4 ">
      <div >
          <form action="" className="card mx-6 lg:mx-20 lg:mt-6 " >
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
            
            <div className="flex justify-center mt-4">
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
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <div className="card m-6">
                  <div className="px-10 flex flex-col lg:grid lg:grid-cols-2 m-10 contain ">
                    <div className="ml-2 my-4">
                      {post.id}
                      Titre: {post.title}
                      Contenu: {post.content}
                    </div>
                    <div className="flex justify-center my-10">
                      <button
                      className="bg-white text-red-600  justify-center items-center rounded-full px-6 py-2   hover:text-white hover:bg-red-900 "
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

       
      </div>
    </>
  );
};

export default AddPost;
