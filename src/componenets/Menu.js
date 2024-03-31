import React from 'react'
import data from 'C:/Users/HP/Desktop/mern project/frontend/front/src/restApi.js'
import dinner1 from 'C:/Users/HP/Desktop/mern project/frontend/front/src/dinner1.jpeg'
import dinner2 from 'C:/Users/HP/Desktop/mern project/frontend/front/src/dinner2.png'
import dinner3 from 'C:/Users/HP/Desktop/mern project/frontend/front/src/dinner3.png'
import dinner4 from 'C:/Users/HP/Desktop/mern project/frontend/front/src/dinner4.png'
import dinner5 from 'C:/Users/HP/Desktop/mern project/frontend/front/src/dinner5.png'
import dinner6 from 'C:/Users/HP/Desktop/mern project/frontend/front/src/dinner6.png'

const Menu = () => {
    const dishes= [
        {
            id: 1,
            image: dinner1,
            title: "ROASTED LAMB RUMP",
            category: "Lunch"
        },
        {
            id: 2,
            image: dinner2,
            title: "CITRUS CURED SALMON",
            category: "Dinner"
        },
        {
            id: 3,
            image: dinner3,
            title: "Cakes",
            category: "Breakfast"
        },
        {
            id: 4,
            image: dinner4,
            title: "Curry",
            category: "Lunch"
        },
        {
            id: 5,
            image: dinner5,
            title: "Noodels",
            category: "Dinner"
        },
        {
            id: 6,
            image: dinner6,
            title: "Fish",
            category: "Dinner"
        },

        
    ]
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!</p>
            </div>
            <div className="dishes_container">
                {
                  dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
