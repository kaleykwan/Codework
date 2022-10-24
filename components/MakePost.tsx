import { TextareaAutosize } from "@mui/material";
import Image from "next/image";
import ProfilePic from "../public/profilepic.png";
import { useEffect, useState } from "react";
import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
import { firestore } from "../firebase/clientApp"; // firestore instance

export default function MakePost() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    console.log(`New content  value: ${content}`);
  }, [content]);

  const addPost = async () => {
    const timestamp = serverTimestamp();

    const postData = {
      comments: 0,
      likes: 0,
      text: content,
      loop: "empty",
      timestamp: timestamp,
    };

    await addDoc(collection(firestore, "posts"), postData);
    setContent("");
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addPost();
  };

  return (
    <div className="make-post">
      <div>
        <form onSubmit={handleSubmit} className="make-post-form">
          <div className="make-post-user-avatar-div">
            <Image
              className="make-post-user-avatar"
              src={ProfilePic}
              alt={"profile picture"}
              width={50}
              height={50}
            />
          </div>
          <div>
            <TextareaAutosize
              className="make-post-insert"
              placeholder="Say something!"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="make-post-footer">
            <div className="make-post-button-div">
              <button type="submit" className="make-post-button">
                {" "}
                Post{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
