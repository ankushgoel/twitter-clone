import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from '@mui/icons-material/IosShare';

function Post({avatar, displayName, username, verified, text, image}) {
  return (
    <div className='Post'>
        <div className="Post-Avatar">
            <Avatar src={avatar}></Avatar>
        </div>
        <div className="Post-Body">
            <div className="Post-Header">
                <div className="Post-HeaderText">
                    <h3>
                        <span className='Post-DisplayName'>{displayName} </span>
                        {verified && <VerifiedIcon className='Post-VerifiedBadge'/>}
                        <span className='Post-Username'>@{username}</span>
                    </h3>
                </div>
                <div className="Header-Description">
                    {/* Replying to */}
                </div>
            </div>
            <div className="PostText">
                <span>{text}</span>
                {/* <span>Tweet your thoughts with #hashtags</span> */}
            </div>
            <div className="PostMedia">
                <img src={image} alt="" />
            </div>
            <div className="PostFooter">
                <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <IosShareIcon fontSize="small" />
            </div>
        </div>
    </div>
  )
}

export default Post