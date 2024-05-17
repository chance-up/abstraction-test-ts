import { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const baseURL = "https://jsonplaceholder.typicode.com";

export const Phase0Page = () => {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(baseURL + "/posts/1");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        setPost(data);
        console.log("GET response data:", data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchPost();
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
