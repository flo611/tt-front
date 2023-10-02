import { useContext, useEffect, useState } from "react";
import { Post } from "@/app/components/tools/axios";
import { PostContext } from "@/app/components/context/postProvider";
import { Get, Delete } from "@/app/components/tools/axios";
import EditPost from "@/app/admin/sections/posts/editPost";
import Button from "@/app/components/tools/button";
import { UserContext } from "@/app/components/context/userProvider";

const AddPost = () => {
  const { user, setUser } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostContext);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });
  const config = {
   
    headers: {

      Authorization: `bearer ${user.token}`,
    },
  };

  const data = {
    title: newPost.title,
    content: newPost.content,
    email: user.email,
    plainPassword: user.plainPassword,
  };
  Post("users", data, config).then((response) => console.log(response));

 
 


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
