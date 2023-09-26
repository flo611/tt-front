"use client";
import axios from "axios";
import { useEffect, useContext } from "react";
import { PostContext } from "../../context/postProvider";

export const Get = (path, callback) => {
  // const { posts, setPosts } = useContext(PostContext);

  axios
    .get(`${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/${path}`)
    .then((response) => {
      callback(response);
      console.log(typeof callback)
    })
    // .then((response) => {
    //   // A revoir
    //   // if (path === "posts") {
    //   // console.log(response);
    //   array.push(response.data);
    //   console.log(typeof array);
    //   // setPosts(response.data);
    //   // }
    //   // A revoir
    // })
    .catch((error) => console.error(error));
};

export const GetId = (path, id) => {
  axios
    .get(`${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/${path}/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};

export const Post = (path, data, config) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/${path}`, data, config)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};

export const Put = (path, id) => {
  axios
    .put(`${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/${path}/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};

export const Delete = (path, id) => {
  axios
    .put(`${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/${path}/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};
