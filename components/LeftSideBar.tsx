import NavBar from "./NavBar";
import ProfileThumbnail from "./ProfileThumbnail";
import Author from "./authorInterface";

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
      <ProfileThumbnail {...authorKaley} />
      <NavBar />
    </div>
  );
}
