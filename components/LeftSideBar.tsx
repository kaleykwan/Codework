import NavBar from "./NavBar";
import ProfileThumbnail from "./ProfileThumbnail";
import Author from "./authorInterface";
import Link from "next/link";

let authorKaley: Author = {
  name: "Kaley",
  username: "@kaley",
  following: 0,
  followers: 0,
  avatarURL: "avatar",
};

export default function LeftSideBar() {
  return (
    <div className="left-side-bar">
      <div>
        <ProfileThumbnail {...authorKaley} />
        <NavBar />
      </div>
      <div className="left-side-bar-account-options">
        <Link href="/SignUp">Sign Up</Link>
        <Link href="/SignIn">Sign In</Link>
      </div>
    </div>
  );
}
