"use client";
import axios from "axios";

export const Get = (path, config) => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/${path}`, config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const GetId = (path, id) => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/${path}/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const Post = (path, data, config) => {
  return axios
    .post(`${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/${path}`, data, config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const Put = (path, id) => {
  return axios
    .put(`${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/${path}/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const Delete = (path, id, config) => {
  return axios
    .delete(`${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/${path}/${id}`, config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
