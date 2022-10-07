import Author from "./authorInterface";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ProfilePic from "../public/profilepic.png";

function SuggestedUser({ name, username, avatarURL }: Author) {
  return (
    <div className="suggested-user-box">
      <div className="suggested-user-info">
        <div>
          <Image
            className="suggested-user-avatar"
            src={ProfilePic}
            alt={name + "'s profile picture"}
            width={50}
            height={50}
          />
        </div>
        <div className="suggested-user-info-text">
          <p className="suggested-user-info-name">{name}</p>
          <p className="suggested-user-info-username">{username}</p>
        </div>
      </div>
      <IconButton className="suggested-user-add-button">
        <AddOutlinedIcon sx={{ color: "#B089E2" }} />
      </IconButton>
    </div>
  );
}

let users: Author[] = [
  {
    name: "Kaley",
    username: "@kaley",
    following: 0,
    followers: 0,
    avatarURL: "string",
  },
  {
    name: "Emma",
    username: "@emma",
    following: 0,
    followers: 0,
    avatarURL: "string",
  },
];

const userSuggestions = users.map((user) => {
  return <SuggestedUser {...user} />;
});

export default function CodeworkWithMe() {
  return (
    <div className="codework-with-me">
      <h1 className="codework-with-me-text">Codework With Me</h1>
      <div className="codework-with-me-suggestion-list">{userSuggestions}</div>
    </div>
  );
}
