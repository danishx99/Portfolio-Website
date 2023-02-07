import React from 'react'
import "./portfolio.css"

const Portfolio = () => {

  const data = [
{
id: 1,
image: "https://cdn.mos.cms.futurecdn.net/qdNb38ow6S3ARrhBy4TtkE-415-80.jpg",
title: "Stocks App",
github: "https://github.com",
demo: "https://google.com"
},
{
id: 1,
image: "https://cdn.mos.cms.futurecdn.net/qdNb38ow6S3ARrhBy4TtkE-415-80.jpg",
title: "Stocks App",
github: "https://github.com",
demo: "https://google.com"
},
{
id: 1,
image: "https://cdn.mos.cms.futurecdn.net/qdNb38ow6S3ARrhBy4TtkE-415-80.jpg",
title: "Stocks App",
github: "https://github.com",
demo: "https://google.com"
}
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

       {
        data.map(({id, image, title, github, demo}) => {
            return (
        <article key={id} className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className='portfolio-cta'>
          <a href={github} className='btn' rel="noreferrer" target="_blank">Github</a>
          <a href={demo} className='btn btn-primary' rel="noreferrer" target="_blank">Live Demo</a>
        </div>
        </article>
            )


        })

       }

      </div>
    </section>
  )
}

export default Portfolio