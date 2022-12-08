import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import './post.css';

// import Avatar from "@material-ui/core/Avatar";

function Post({username, caption, imageUrl, shotdisc }) {
  return (
    <div className="post">
      <div className="post__header">
        {/* Header: avatar with username */}
        <Avatar
          className="post__avatar"
          alt={username}
          src="./images/ava.jpg"
        />
        {/* <ListItem className="lis">
                    <ListItemAvatar>
                        <Avatar className="post__avatar" src="./images/ava.jpg" alt={username} />
                    </ListItemAvatar>
                   <ListItemText primary={username} />
                   <br />
                   <p>{shotdisc}</p>
                </ListItem> */}
        <h6>{username}</h6>
        <p>{shotdisc}</p>
      </div>
      {/* Image */}
      <img className="post__image" src={imageUrl} alt="" />
      <div className="heart">
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder  background-color="white"/>} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
        label=" Like"
      />
      </div>
      {/* Username + caption */}
      <div className="pst">
      <h7 className="post__text">
        <strong>{username}</strong> <span>{caption}</span>
      </h7>
      </div>
    </div>
  );
}

export default Post;