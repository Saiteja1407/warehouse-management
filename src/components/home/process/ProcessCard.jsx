import React from "react"
import Heading from "../../common/heading/Heading"
import "./ProcessCard.css"
import { processCards } from "../../../dummydata"



const ProcessCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
          <img src={require("./about.png")} alt="About" />
          </div>
          <div className='right row'>
            <Heading subtitle='Searching WAREHOUSE' title='Find Your Perfect Ware House in 3 Easy Steps' />
            <div className='items'>
              {processCards.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProcessCard