import Author from "./authorInterface";
import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function ProfileThumbnail(props : Author) {
  return (
    <div className="profile-thumbnail">
      <div className="profile-thumbnail-user-info">
        <h1 className="profile-thumbnail-user-info-name">{props.name}</h1>
        <h1 className="profile-thumbnail-user-info-username">{props.username}</h1>
      </div>
      <div className="profile-thumbnail-user-stats">
        <div className="profile-thumbnail-user-stats-box">
          <h1 className="profile-thumbnail-user-stats-count">{props.followers}</h1>
          <h1 className="profile-thumbnail-user-stats-label">Followers</h1>
        </div>
        <div className="profile-thumbnail-user-stats-box">
          <h1 className="profile-thumbnail-user-stats-count">{props.following}</h1>
          <h1 className="profile-thumbnail-user-stats-label">Following</h1>
        </div>
      </div>
      <div className="profile-thumbnail-link-box">
        <AccountCircleOutlinedIcon sx={{ color: "#B089E2" }} />
        <h1 className="profile-thumbnail-link-text">
          <Link href="https://nextjs.org">Profile</Link>
        </h1>
      </div>
    </div>
  );
}
