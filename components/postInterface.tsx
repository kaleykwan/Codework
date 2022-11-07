import {
  DocumentReference,
  getDoc,
  DocumentData,
  Timestamp,
} from "firebase/firestore";
import Author from "./authorInterface";

export interface FBPost {
  author: DocumentReference<Author>;
  comments: number;
  likes: number;
  loop: string;
  text: string;
  timestamp: Timestamp;
}

export interface PostInterface {
  author: Author;
  comments: number;
  likes: number;
  loop: string;
  text: string;
  date: Date;
}

export const getFBPost = async (
  docData: DocumentReference<FBPost>
): Promise<FBPost> => {
  const data = await getDoc(docData);
  const postData = data.data()!;
  return { ...postData };
};

export const inflatePost = async (fbPost: FBPost): Promise<PostInterface> => {
  const docRef = fbPost.author;
  const authorDocumentData = await getDoc(docRef);
  const myAuthor = authorDocumentData.data()!;
  const date = fbPost.timestamp;
  console.log(`date: ${date}`);
  const formattedDate = date && date.toDate();
  return {
    ...fbPost,
    author: myAuthor,
    date: formattedDate,
  };
};

export default PostInterface;
