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
  DocumentData,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

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
  const q = query(collection(firestore, "posts"), orderBy("timestamp", "desc"));
  const [FBposts, setFBposts] = useState<Promise<FBPost>[]>(
    []
  );
  const [InflatedPosts, setInflatedPosts] = useState<
    PostInterface[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const postsUpdated = querySnapshot.docs.map((docData) =>
          docData.ref.withConverter(postConverter)
        );
        const FBposts = postsUpdated.map((post) => getFBPost(post));
        setFBposts(FBposts);
      });

      /* const querySnapshot = await getDocs(q);
      const posts = querySnapshot.docs.map((docData) =>
        docData.ref.withConverter(postConverter)
      ); */
      const returnedFBPosts = await Promise.all(FBposts!);
      const inflatedPosts = returnedFBPosts.map(
        async (post) => await inflatePost(post)
      );
      const returnedInflatedPosts = await Promise.all(inflatedPosts);
      setInflatedPosts(returnedInflatedPosts);
      return () => unsubscribe();
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const postInterfaces = InflatedPosts;
      setData(postInterfaces!);
    };
    fetchPosts();
  }, [InflatedPosts]);

  return (
    <div className="feed">
      <div>
        <SearchBar />
      </div>
      <div className="feed-make-post">
        <MakePost />
      </div>
      <div className="feed-posts">
        {data.map((postInterface) => {
          return (
            <div>
              <Post {...postInterface} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
