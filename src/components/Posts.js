import React, { useState,useContext } from "react";
import { ContextProvider } from "../Global/Context";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Comment from "./Comments";
const Posts = () => {
  const { posts,user } = useContext(ContextProvider);
  const [liked,setLiked]=useState(false);
  const [like,setLike]=useState(7);
  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div className="posts__header">
            <div className="posts__header-avator">{post.username[0]}</div>
            <div className="posts__header-name">{post.username}</div>
          </div>
          <div className="posts__img">
            <img src={post.image} alt={post.image} />
          </div>
          
          {liked  ? (
          <FavoriteIcon fontSize="large" className="favourite" onClick={(e) =>{ setLiked(false)
          setLike(like-1)
          }} />
          
        ) : (
          <FavoriteBorderIcon
          className="favourite"
          
            fontSize="large"
            onClick={(e) => {
            setLiked(true)
            setLike(like+1)}}
          />
          
        )} 
        <p className="like">{like} likes</p>
        
        
          <Comment id={post.id} />
        </div>
      ))}
    </>
  );
};
export default Posts;
