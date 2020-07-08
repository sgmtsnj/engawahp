import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright (株)コミュニティハウス えん {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  </div>
)
