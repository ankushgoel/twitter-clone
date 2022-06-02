import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
  return (
    <div className='Feed'>
        <div className='Feed-Header'>
            <h2>Home</h2>
        </div>

        <TweetBox />

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Feed