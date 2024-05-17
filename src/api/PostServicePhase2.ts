import HttpClient from "./httpClient";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

class PostService {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async getPost(postId: number): Promise<Post> {
    return this.client.http.get<Post>(`/posts/${postId}`);
  }

  async createPost(postData: Partial<Post>): Promise<Post> {
    return this.client.http.post<Post>(`/posts`, postData);
  }

  async updatePost(postId: number, postData: Partial<Post>): Promise<Post> {
    return this.client.http.put<Post>(`/posts/${postId}`, postData);
  }

  async deletePost(postId: number): Promise<void> {
    return this.client.http.delete<void>(`/posts/${postId}`);
  }
}

export default PostService;
