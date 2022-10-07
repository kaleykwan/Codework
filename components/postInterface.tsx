import Author from "./authorInterface";

interface Post {
  text: string;
  date: Date;
  author: Author;
  likes: number;
  loop: string;
}

export default Post;
