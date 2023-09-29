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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTU5NzU2MjAsImV4cCI6MTY5NTk3OTIyMCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.UKNG9Js5UiFkGukM9MsweD7FnYoMN0ekdP-FnN0sZuuNwlxjra5RuGeyhlPE28iBNZLaznZmvhpzhYKNYOJ2MxCC3QViLeVLYiCjNtOlSG57vct7DDnn56XACzeiKzl3d9h_Ub6xv31_V8JcXz5nL3XkOdcXCQsmlkjhDMhiA7vaMPPyC6iJXn8Pwcv834iq3b5wzSR74pO0g8OIeITfyIWhpb-ledjcLAmpRttr1yWUXulGaKMZo5HPF8rJTZ-gGxFx7mGIq6oqYAbdv_TDhlpKEi2st9xel9jUoM7u9-fWAJipI-B9MWDqYiD-jvxAxRd6j3WvuJ2ngFU0cw6gAg";
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
        <ul className="flex flex-row justify-around">
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
