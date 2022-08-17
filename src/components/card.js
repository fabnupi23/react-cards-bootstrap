import React from 'react'
import PropTypes from 'prop-types';
import './cards.css'

function card({title, imageSource, text, url}) {
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
        <div className='overflow'>
          <img src={imageSource} alt="" className='card-img-top'/>
        </div>        
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
              {text ? text: 'Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.'}
            </p>
            <a href={url} className='btn btn-outline-secondary rounded-0' >
              Go to this web site
            </a>
        </div>
    </div>
  )
}

card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default card;