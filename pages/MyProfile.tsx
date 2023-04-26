import type { NextPage } from "next";
import { ProfileNavBar } from "../components/NavBar";
import LoopsForYou from "../components/LoopsForYou";
import CodeworkWithMe from "../components/CodeworkWithMe";
import ProfileHeader from "../components/ProfileHeader";
import Author from "../components/authorInterface";
import Feed from "../components/MyProfileFeed";

let authorKaley: Author = {
    name: "Kaley",
    username: "@kaleykwan",
    college: "Purdue University",
    major: "computer science",
    following: 0,
    followers: 0,
    bio: "stream midnights"
}
const MyProfile: NextPage = () => {
  return (
    <div className="profile">
      <div className="profile-left-sidebar">
        <ProfileNavBar />
      </div>
      <div className="profile-center">
        <ProfileHeader {...authorKaley} />
        <Feed />
      </div>
      <div className="profile-right-sidebar">
        <LoopsForYou />
        <CodeworkWithMe />
      </div>
    </div>
  );
};

export default MyProfile;
