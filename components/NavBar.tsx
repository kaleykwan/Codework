import Link from "next/link";

interface OptionInterface {
  link: string;
  name: string;
}

function Option({ link, name }: OptionInterface) {
  return (
    <h1 className="option">
      <Link href={link}>{name}</Link>
    </h1>
  );
}

let options: OptionInterface[] = [
  {
    link: "https://nextjs.org",
    name: "Notifications",
  },
  {
    link: "https://nextjs.org",
    name: "Messages",
  },
  {
    link: "https://nextjs.org",
    name: "My Loops",
  },
  {
    link: "https://nextjs.org",
    name: "Accessibility",
  },
];

const navBarOptions = options.map((option) => {
  return <Option {...option} />;
});

let profileOptions: OptionInterface[] = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "https://nextjs.org",
    name: "Notifications",
  },
  {
    link: "https://nextjs.org",
    name: "Messages",
  },
  {
    link: "https://nextjs.org",
    name: "Accessibility",
  },
];

const profileNavBarOptions = profileOptions.map((option) => {
  return <Option {...option} />;
});

export function ProfileNavBar() {
  return (
    <div className="navbar">
      <div className="navbar-options">{profileNavBarOptions}</div>
    </div>
  );
}

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-options">{navBarOptions}</div>
    </div>
  );
}
