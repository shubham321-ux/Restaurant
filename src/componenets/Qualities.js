import React from 'react'
import data from '../restApi.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import foodsvg from 'C:/Users/HP/Desktop/mern project/frontend/front/src/quality_food.svg'
import superTaste from 'C:/Users/HP/Desktop/mern project/frontend/front/src/super_taste.svg'
import fastdelivery from 'C:/Users/HP/Desktop/mern project/frontend/front/src/fast_delivery.svg'
const Qualities = () => {
  const  ourQualities= [
    {
        id: 1,
        image: foodsvg,
        title: "QUALITY FOOD",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat."
    },
    {
        id: 2,
        image: superTaste,
        title: "SUPER TASTE",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing sit amet elit. Sit voluptates quaerat pariatur."
    },
    {
        id: 3,
        image: fastdelivery,
        title: "FAST DELIVERY",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat."
    }
]
  return (
    <>
    <Navbar/>
        <section className='qualities' id='qualities'>
          <div className="container">
            {
              ourQualities.map(element=>{
                return(
                  <div className='card' key={element.id}>
                      <img src={element.image} alt={element.title} />
                      <p className='title'>{element.title}</p>
                      <p className='description'>{element.description}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default Qualities
