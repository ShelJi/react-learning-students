import React from 'react'
import myImage from "./assests/image.png"

const Flex = () => {
  let img = "";
  let a = false;

  let altText = "Image not found 🫩";
  
  return (
    <div>
      <img src={img} alt={altText} height="100px"/>
    </div>
  )
}

export default Flex