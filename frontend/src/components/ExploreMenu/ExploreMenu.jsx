import React, { useRef } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  const scrollRef = useRef(null)
  const itemRefs = useRef([])

  const handleClick = (item, index) => {
    setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))

    // Scroll clicked item into view
    itemRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    })
  }

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
      </p>

      <div className="explore-menu-list" ref={scrollRef}>
        {menu_list.map((item, index) => (
          <div
            key={index}
            ref={el => (itemRefs.current[index] = el)}
            className="explore-menu-list-item"
            onClick={() => handleClick(item, index)}
          >
            <img
              className={category === item.menu_name ? 'active' : ''}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  )
}

export default ExploreMenu
