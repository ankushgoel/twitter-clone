import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'

function Feed() {
  return (
    <div className='Feed'>
        <div className='Feed-Header'>
            <h2>Home</h2>
        </div>

        <TweetBox />
    </div>
  )
}

export default Feed