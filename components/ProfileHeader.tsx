import Author from "./authorInterface";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';

export default function ProfileHeader({
  name,
  username,
  following,
  followers,
  avatarURL,
  bio,
  college,
  major,
}: Author) {
  return (
    <div className="profile-header">
      <div className="profile-header-info">
        <p className="profile-header-info-name">{name}</p>
        <p className="profile-header-info-username">{username}</p>
        <p className="profile-header-info-bio">{bio}</p>
      </div>
      <div className="profile-header-facts">
        <div className="profile-header-fact">
          <SchoolOutlinedIcon className="profile-header-fact-icon" />
          <p className="profile-header-fact-text">{college}</p>
        </div>
        <div className="profile-header-fact">
          <HistoryEduOutlinedIcon className="profile-header-fact-icon" />
          <p className="profile-header-fact-text">{major}</p>
        </div>
      </div>
      <div className="profile-header-stats">
        <div className="profile-header-stat">
          <p className="profile-header-stat-number">{followers}</p>
          <p className="profile-header-stat-text">followers</p>
        </div>
        <div className="profile-header-stat">
          <p className="profile-header-stat-number">{following}</p>
          <p className="profile-header-stat-text">following</p>
        </div>
      </div>
    </div>
  );
}
