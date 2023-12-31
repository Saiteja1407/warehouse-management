import React from "react"
import "./citylocation.css"
import { city } from "../../../dummydata"
import Heading from "../../common/heading/Heading"

const CityLocation = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='WAREHOUSES' title='Browse Our WareHouses in Some Of The Famous Cities' />
          <div className='content grid3'>
            {city.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CityLocation