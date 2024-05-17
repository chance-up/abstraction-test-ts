export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const baseURL = "https://jsonplaceholder.typicode.com";

class PostService {
  async fetchPost(): Promise<Post> {
    try {
      const response = await fetch(baseURL + "/posts/1");
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      console.log("GET response data:", data);
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }

  async createPost(post: Post): Promise<Post> {
    try {
      const response = await fetch(baseURL + "/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      console.log("POST response data:", data);
      return data;
    } catch (error) {
      console.error("There was a problem with the create operation:", error);
      throw error;
    }
  }

  async updatePost(postId: number, post: Post): Promise<Post> {
    try {
      const response = await fetch(baseURL + "/posts/" + postId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      console.log("PUT response data:", data);
      return data;
    } catch (error) {
      console.error("There was a problem with the update operation:", error);
      throw error;
    }
  }

  async deletePost(postId: number): Promise<void> {
    try {
      const response = await fetch(baseURL + "/posts/" + postId, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      console.log("DELETE successful");
    } catch (error) {
      console.error("There was a problem with the delete operation:", error);
      throw error;
    }
  }
}
export default PostService;
