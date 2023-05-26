import React from 'react'
import LatestStories from './LatestStories'

const Stories = () => {
  return (
    <section className='stories section' id='stories'>
        <div className='container'>
            <h3 className="stories-title"> What's Going On </h3>
            <h2 className="stories-subtitle">Latest stories</h2>
            <p className='stories-text'>News From Abstrak And Around The World Of Web Design And Complete Solution of Online Digital Marketing </p>

            <LatestStories />
        </div>
    </section>
  )
}

export default Stories