import { useEffect, useState } from "react";
import { Input } from "@mui/material";
import Link from "next/link";
import { firestore, app } from "../firebase/clientApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";

function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Logged in!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
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
      <div className="sign-up-form-button">
        <Link type="submit" href="/">
          Sign In
        </Link>
      </div>
    </form>
  );
}
export default SignInForm;
