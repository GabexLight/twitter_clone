import React, { useState, useEffect } from 'react';
import "./Feed.css";
import Post from "./Post"
import TweetBox from "./TweetBox";
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore'

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect((posts) => {
      getPosts(posts);
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
  getPosts()

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>

      <TweetBox />
      
      {posts.map(post => (
        <Post
          key={post.id}
          displayName={post.data.displayName}
          username={post.data.username}
          verified={post.data.verified}
          text={post.data.text}
          avatar={post.data.avatar}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;