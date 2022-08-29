import React, { useState, useEffect } from 'react';
import "./Feed.css";
import Post from "./Post"
import TweetBox from "./TweetBox";
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(posts)
  }, []);

  function getPosts() {
    const postsCol = collection(db, 'posts');
    getDocs(postsCol)
      .then(response => {
        const posts = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setPosts(posts)
      })
      .catch(error => console.log(error.message))
  }

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>

      <TweetBox />
      
      {posts.map(post => (
        <Post
          key={post.id}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}


    </div>
  );
}

export default Feed;