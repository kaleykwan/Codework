import React, { useState, useEffect } from "react";
import { FBPost, inflatePost, getFBPost, PostInterface } from "./postInterface";
import Post from "./Post";
import MakePost from "./MakePost";
import SearchBar from "./SearchBar";
import { firestore } from "../firebase/clientApp";
import {
  useCollectionData,
  useCollection,
} from "react-firebase-hooks/firestore";
import {
  collection,
  query,
  limit,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
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
  /*const [data, setData] = useState<PostInterface[]>([]);  */
  const q = query(collection(firestore, "posts"), orderBy("timestamp", "desc"));
  const [InflatedPosts, setInflatedPosts] = useState<PostInterface[]>([]);

  const [data, loading, error] = useCollection(q);

  useEffect(() => {
    if (!data) return;

    const postsUpdated = data!.docs.map((docData) =>
      docData.ref.withConverter(postConverter)
    );
    const FBposts = postsUpdated.map((post) => getFBPost(post));
    const fetchPosts = async () => {
      const returnedFBPosts = await Promise.all(FBposts);
      const inflatedPosts = returnedFBPosts.map(
        async (post) => await inflatePost(post)
      );
      const returnedInflatedPosts = await Promise.all(inflatedPosts);
      console.log(returnedInflatedPosts[0].author.name);
      setInflatedPosts(returnedInflatedPosts);
    };
    fetchPosts();
  }, [data]);

  return (
    <div className="feed">
      <div>
        <SearchBar />
      </div>
      <div className="feed-make-post">
        <MakePost />
      </div>
      <div className="feed-posts">
        {InflatedPosts.map((postInterface) => {
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
