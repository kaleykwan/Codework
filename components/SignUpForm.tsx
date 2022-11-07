import { useEffect, useState } from "react";
import { Input } from "@mui/material";
import Link from "next/link";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firestore } from "../firebase/clientApp";
import { collection, setDoc, doc } from "firebase/firestore";

function SignUpForm() {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setDoc(doc(firestore, "users", user.uid), {
        email: user.email,
        name: name,
        username: username,
        following: 0,
        followers: 0,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <div>
        <Input
          className="sign-up-form-field"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <Input
          className="sign-up-form-field"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Input
          className="sign-up-form-field"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Input
          className="sign-up-form-field"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="sign-up-form-button">
        <Link type="submit" href="/">
          Get Codeworking
        </Link>
      </div>
    </form>
  );
}
export default SignUpForm;
