import { useState, useEffect } from "react";
import PostService from "../api/postServicePhase1";
import type { Post } from "../api/postServicePhase1";

export const Phase1Page = () => {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchData = async () => {
      const postService = new PostService();
      try {
        const response = await postService.fetchPost();
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
