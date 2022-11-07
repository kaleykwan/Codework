import Author from "./authorInterface";
import React, { useState, useEffect } from "react";
import { FBPost, inflatePost, getFBPost, PostInterface } from "./postInterface";
import Post from "./Post";
import MakePost from "./MakePost";
import SearchBar from "./SearchBar";
import { firestore } from "../firebase/clientApp";
import {
  collection,
  query,
  limit,
  getDocs,
  QueryDocumentSnapshot,
  getDoc,
  DocumentData,
  orderBy,
} from "firebase/firestore";

async function getData() {
  const q = query(collection(firestore, "posts"), orderBy("timestamp", "desc"));

  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map((docData) =>
    docData.ref.withConverter(postConverter)
  );
  const FBposts = posts.map((post) => getFBPost(post));
  const returnedFBPosts = await Promise.all(FBposts);
  const inflatedPosts = returnedFBPosts.map(
    async (post) => await inflatePost(post)
  );
  const returnedInflatedPosts = await Promise.all(inflatedPosts);
  return returnedInflatedPosts;
}

const postConverter = {
  toFirestore(post: FBPost): DocumentData {
    return {
      text: post.text,
      author: post.author,
      date: post.timestamp,
      likes: post.likes,
    };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot<FBPost>): FBPost {
    const data = snapshot.data();
    return { ...data };
  },
};

export default function Feed() {
  const [data, setData] = useState<PostInterface[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postInterfaces = await getData();
      setData(postInterfaces);
    };
    fetchPosts();
  }, []);

  const postList = data.map((postInterface) => {
    return (
      <div>
        <Post {...postInterface} />
      </div>
    );
  });
  return (
    <div className="feed">
      <div>
        <SearchBar />
      </div>
      <div className="feed-make-post">
        <MakePost />
      </div>
      <div className="feed-posts">{postList}</div>
    </div>
  );
}
