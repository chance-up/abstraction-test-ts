import { useState, useEffect } from "react";
import PostService from "../api/PostServicePhase2";
import type { Post } from "../api/PostServicePhase2";
import HttpClient from "../api/httpClient";

export const Phase2Page = () => {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchData = async () => {
      const client = new HttpClient();
      const postService = new PostService(client);
      try {
        const response = await postService.getPost(1);
        setPost(response);
        console.log("GET response data:", response);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>userID : {post?.userId} </p>
      <p>ID : {post?.id} </p>
      <p>Title : {post?.title} </p>
      <p>Body : {post?.body} </p>
    </div>
  );
};
