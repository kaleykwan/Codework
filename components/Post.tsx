import PostInterface from "./postInterface";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import ProfilePic from "../public/profilepic.png";
import Link from "next/link";
import { autocompleteClasses } from "@mui/material";

export default function Post({ text, date, author, loop }: PostInterface) {
  return (
    <div className="post">
      <div className="post-header">
        <div>
          <Image
            className="post-header-avatar"
            src={ProfilePic}
            alt={author.name + "'s profile picture"}
            width={50}
            height={50}
            layout="fixed"
          />
        </div>
        <div className="post-header-text">
          <div className="post-header-text-user-info">
            <p className="post-header-text-name">{author.name}</p>
            <p className="post-header-text-username">{author.username}</p>
            <CircleIcon
              className="post-header-text-circle"
              sx={{ fontSize: "3px" }}
            />
            <p className="post-header-text-date">
              {/*date.toLocaleDateString()*/}
            </p>
          </div>
          <div>
            <p className="post-content">{text}</p>
          </div>
        </div>
      </div>
      <div className="post-footer">
        <div className="post-footer-loop">
          <Link href="https://nextjs.org">{loop}</Link>
        </div>
        <div className="post-footer-actions">
          <IconButton className="post-footer-actions-comment">
            <InsertCommentRoundedIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
          <IconButton className="post-footer-actions-like">
            <FavoriteBorderIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
          <IconButton className="post-footer-actions-share">
            <IosShareOutlinedIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
