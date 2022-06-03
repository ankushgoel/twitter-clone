import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import { collection, onSnapshot } from "firebase/firestore"; 

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //Real-time collection data using onSnapshot
    onSnapshot(collection(db, 'posts'), (snapshot) => {
      setPosts(snapshot.docs.map(doc => (
        {id: doc.id, ...doc.data()}
      )));
    })
  }, [])

  return (
    <div className='Feed'>
        <div className='Feed-Header'>
            <h2>Home</h2>
        </div>

        <TweetBox />

        <Post 
          avatar='https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg'
          displayName='Twitter'
          username='twitter'
          verified='true'
          text='Manifesting dreams!'
          image='https://pbs.twimg.com/media/FJYvSkCXwAAgnfq?format=jpg&name=medium'
        />
        {posts.map(post => (
          <Post 
            key={post.id}
            avatar={post.avatar}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
          />
        ))}
    </div>
  )
}

export default Feed