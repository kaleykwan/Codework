import Author from "./authorInterface";
import PostInterface from "./postInterface";
import Post from "./Post";

let authorKaley: Author = {
  name: "Kaley",
  username: "@kaley",
  following: 0,
  followers: 0,
  avatarURL: "avatar",
};

let posts: PostInterface[] = [
  {
    text: "just posted on my web3 blog! Here's a sneak peak: If we want to successfully onboard the next one million people into web3, then I believe we need to develop more opinionated curriculums, scope down the resources we deem necessary for newbies, and better understand who is curious about this space and what obstacles they face.",
    date: new Date(),
    author: authorKaley,
    likes: 0,
    loop: "web3",
  },
  {
    text: "got accepted to launchpad at purdue! my project idea is a social networking app geared toward women in tech.",
    date: new Date(),
    author: authorKaley,
    likes: 0,
    loop: "internship",
  },
  {
    text: "Google STEP applications close end of October!",
    date: new Date(),
    author: authorKaley,
    likes: 0,
    loop: "internship",
  },
  {
    text: "Sample post",
    date: new Date(),
    author: authorKaley,
    likes: 0,
    loop: "internship",
  },
];

const postList = posts.map((post) => {
  return <div><Post {...post} /></div>;
});

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed-posts">{postList}</div>
    </div>
  );
}
