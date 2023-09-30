"use client";
import { Get } from "@/app/components/tools/axios";
import { PostContext } from "@/app/components/context/postProvider";
import { useContext, useEffect } from "react";
import Link from "next/link";
import "../../assets/css/styles.css";

const ShowPosts = () => {
  const { posts, setPosts } = useContext(PostContext);

  useEffect(() => {
    Get("posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <h1 className=" flex justify-center text-xl text-red-500  my-10 uppercase underline">
        Liste des posts
      </h1>

      <div className="grid grid-cols-2 my-10">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <div className="flex flex-col items-center text-white justify-center p-10 m-4 card mx-40 my-10">
                <div className="contain py-10 px-10">
                  <h1>Titre : {post.title}</h1>
                  <h2>Status : {post.state}</h2>
                  <h3>Créé le : {post.createdAt}</h3>
                  <div className="flex justify-center  mt-5 container">
                    <button className="bg-white text-red-600 rounded-full px-10 py-2 hover:text-white hover:bg-red-900">
                    <Link href={`/posts/${post.id}`}>En savoir +</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowPosts;
