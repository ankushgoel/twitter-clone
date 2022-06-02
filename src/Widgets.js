import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='Widgets'>
      <div className="Widgets-InputSearch">
        <SearchIcon className='Widgets-SearchIcon' />
        <input type="text" placeholder='Search Twitter' />
      </div>

      <div className="Widgets-Containers">
        <TwitterTweetEmbed tweetId='1509951255388504066' />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='twitter'
          options={{height: 475}}
        />

        {/* New to Twitter */}
        {/* Relevant People */}
        {/* What's Happening */}
        {/* Who to Follow */}
      </div>

      <div className="Widgets-Footer">
        <nav aria-label="Footer" role="navigation" >
        <a href="https://twitter.com/tos" dir="auto" rel="noopener noreferrer" target="_blank" >
        <span >Terms of Service</span></a>
        <a href="https://twitter.com/privacy" dir="auto" rel="noopener noreferrer" target="_blank" >
          <span >Privacy Policy</span></a>
          <a href="https://support.twitter.com/articles/20170514" dir="auto" rel="noopener noreferrer" target="_blank" >
            <span >Cookie Policy</span></a>
            <a href="https://help.twitter.com/resources/accessibility" dir="auto" rel="noopener noreferrer" target="_blank" >
              <span >Accessibility</span></a>
              <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html" dir="auto" rel="noopener noreferrer" target="_blank" >
                <span >Ads info</span></a>
          
          <div className="Widgets-Copyright" >
            <span >© 2022 Twitter, Inc.</span>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Widgets