import React from 'react'
import Card from "./card";
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

//Creamos una variable y en ella creamos un array de objetos para crear varias tarjetas

const cars = [
  {
    id: 1,
    title: "Html",
    image: image1,
    url: 'https://developer.mozilla.org/es/docs/Web/HTML',
    text: 'El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos.'
  },
  {
    id: 2,
    title: "JavaScript",
    image: image2,
    url: 'https://lenguajejs.com/',
    text: 'JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase.'
  },
  {
    id: 3,
    title: "React Native",
    image: image3,
    url: 'https://es.reactjs.org/',
    text: 'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.'
  },
];

function cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cars.map((card) => (
            <div className='col-md-4' key={cars.id}>
            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default cards;