import React, { useEffect, useState } from 'react'
import image1 from './img/image1.jpeg'
import image2 from './img/image2.jpeg'
import image3 from './img/image3.jpeg'
import image4 from './img/image4.jpeg'
import image5 from './img/image5.jpeg'

const data = [
  image1, image2, image3, image4, image5
];

export function ImageSlider() {

  const [slide, setSlide] = useState(0);

  const increase = () => {
    if(slide === data.length-1){setSlide(0)}
    else setSlide(slide + 1);
  }
  const decrease = () => {
    if(slide === 0){setSlide(data.length-1)}
    else setSlide(slide - 1);
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     increase();
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer); 
  //   }
  // }, [slide]);

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <button style={{margin: '1rem'}} onClick={decrease}>Previous</button>
    
    {data.map((img, i) => (
      <img key={img} src={img} alt='wallpapers' style={{
        width: '280px', 
        height: '170px', 
        objectFit: 'contain',
        display: slide === i ? 'block' : 'none'
        }}></img>
    ))}

      {/* <img src={data[slide]} alt='wallpapers' style={{ 
        width: '280px', 
        height: '170px', 
        objectFit: 'contain',
      }}></img> */}
      
    <button style={{margin: '1rem'}} onClick={increase}>Next</button>
    </div>
    </>
  )
}

// export default ImageSlider

// {data.map((item, index) => {
//   return <div key={index}>{item}</div>;
// })}

// if u don't write return it won't give a syntax error, the function will implicitly return undefined. Therefore, you need to explicitly use return to ensure that the JSX elements are returned from the function.

// {data.map((item, index) => (
//   <div key={index}>{item}</div>
// ))}
// This approach is more concise and commonly used in modern React development.