import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'
import db from './firebase'
import { collection, addDoc } from "firebase/firestore"; 

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')

  const sendTweet = e => {
    e.preventDefault();
    if(tweetMessage === '')
      return console.log('empty');
    addDoc(collection(db, 'posts'), {
      displayName: 'abc',
      username: 'abc',
      verified: false,
      text: tweetMessage
    })
    .then(() => {
      setTweetMessage('');
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  return (
    <div className='TweetBox'>
        <form>
            <div className='TweetBox-Input'>
                <Avatar></Avatar>
                <input 
                type="text" 
                placeholder="What's happening" 
                onChange={e => setTweetMessage(e.target.value)} 
                value={tweetMessage}></input>
            </div>
            
            <Button onClick={sendTweet} type="submit" className='TweetBox-TweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox