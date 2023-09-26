"use client";
import { Get, GetId, Post } from "@/app/components/tools/axios";
import { PostContext } from "@/app/components/context/postProvider";
import { useContext, useEffect } from "react";
import Link from "next/link";

const ShowPosts = () => {
  const { posts, setPosts } = useContext(PostContext);

  return (
    <>
      {<Get path="posts" />}
      <h1 className="text-xl text-red-500 text-center my-10 uppercase font-bold">
        Liste des posts
      </h1>
      <Link href={"/posts/admin"}>Espace posts</Link>
      <div className="grid grid-cols-2 my-10">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <div className="flex flex-col items-center justify-center p-4 m-4">
                <h1>Titre : {post.title}</h1>
                <h2>Status : {post.state}</h2>
                <h3>Créé le : {post.createdAt}</h3>
                <Link href={`/posts/${post.id}`}>Hello</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowPosts;
