import Link from "next/link";

interface LoopInterface {
  link: string;
  name: string;
}

function Loop({ link, name }: LoopInterface) {
  return (
    <h1 className="loop">
      <Link href={link}>{name}</Link>
    </h1>
  );
}

let loops: LoopInterface[] = [
  {
    link: "https://nextjs.org",
    name: "internship",
  },
  {
    link: "https://nextjs.org",
    name: "web dev",
  },
  {
    link: "https://nextjs.org",
    name: "web3",
  },
  {
    link: "https://nextjs.org",
    name: "Purdue",
  },
];

const loopSuggestions = loops.map((loop) => {
  return <Loop {...loop} />;
});

export default function LoopsForYou() {
  return (
    <div className="loops-for-you">
      <h1 className="loops-for-you-text">Loops For You</h1>
      <div className="loops-for-you-suggestion-list">{loopSuggestions}</div>
    </div>
  );
}
