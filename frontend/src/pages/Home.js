import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct  category= {"airpods"} heading={"Top's airpods"}/>
      <HorizontalCardProduct  category= {"camera"} heading={"Popular camera"}/>
      <HorizontalCardProduct  category= {"trimmers"} heading={"Most likely Trimmers"}/>
      <VerticalCardProduct  category={"mobiles"} heading={"Mobiles "}/>
      <VerticalCardProduct  category={"televisions"} heading={"Branded TV "}/>

      
    </div>
  )
}

export default Home