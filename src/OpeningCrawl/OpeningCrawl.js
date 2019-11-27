import React from 'react';

import './OpeningCrawl.css';

function OpeningCrawl(props) {
  return(
    <section className="star-wars">
      <div className="crawl">  
        <h1>{props.crawl.title}</h1>
        <p>{props.crawl.text}</p>
      </div>
    </section>
  )
}
export default OpeningCrawl;