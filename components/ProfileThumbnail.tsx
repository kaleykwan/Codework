import Author from "./authorInterface";
import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firestore } from "../firebase/clientApp"; // firestore instance
import { collection, doc, getDoc, DocumentReference } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import React, { useState, useEffect } from "react";
import { useSlotProps } from "@mui/base";

export default function ProfileThumbnail(props: Author) {
  /*let docRef: DocumentReference<Author>;*/
  const [docRef, setDocRef] = useState<DocumentReference | undefined>(
    undefined
  );
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setDocRef(doc(firestore, "users", uid));
    } else {
      // User is signed out
      // ...
    }
  });
  const [snapshot, loading, error] = useDocument(docRef!);
  const data = snapshot?.data(); 

  return (
    <div className="profile-thumbnail">
      <div className="profile-thumbnail-user-info">
        <h1 className="profile-thumbnail-user-info-name">{data?.name}</h1>
        <h1 className="profile-thumbnail-user-info-username">
          {data?.username}
        </h1>
      </div>
      <div className="profile-thumbnail-user-stats">
        <div className="profile-thumbnail-user-stats-box">
          <h1 className="profile-thumbnail-user-stats-count">
            {data?.followers}
          </h1>
          <h1 className="profile-thumbnail-user-stats-label">Followers</h1>
        </div>
        <div className="profile-thumbnail-user-stats-box">
          <h1 className="profile-thumbnail-user-stats-count">
            {data?.following}
          </h1>
          <h1 className="profile-thumbnail-user-stats-label">Following</h1>
        </div>
      </div>
      <div className="profile-thumbnail-link-box">
        <AccountCircleOutlinedIcon sx={{ color: "#B089E2" }} />
        <h1 className="profile-thumbnail-link-text">
          <Link href="/MyProfile">Profile</Link>
        </h1>
      </div>
    </div>
  );
}
