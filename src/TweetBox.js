import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'

function TweetBox() {
  return (
    <div className='TweetBox'>
        <form action="">
            <div className='TweetBox-Input'>
                <Avatar></Avatar>
                <input type="text" placeholder="What's happening"></input>
            </div>
            
            <Button className='TweetBox-TweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox