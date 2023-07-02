import React from "react"
import ProcessCard from "./process/ProcessCard"
import Hero from "./hero/Hero"
import CityLocation from "./CityLocations/CityLocation"
import Testimonal from "./testimonial/Testimonial"

const Home = () => {
  return (
    <>
      <Hero />
      <ProcessCard />
      <CityLocation />
      <Testimonal />
    </>
  )
}

export default Home