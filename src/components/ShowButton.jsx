import React from 'react'
import randomArr from '../assets/services/randomArr';
import arr from "../utils/phrases.json"
import imagesArr from "../utils/images.json"


const ShowButton = ({setRandomPhrase, setImage}) => {

  const quote = randomArr(arr);
  const photo = randomArr(imagesArr)

  const handleClick = () => {
    return setRandomPhrase(quote), setImage(photo);
    
  }

  return (
    <div>
      <button className='app__btn' onClick={handleClick}>Probar Suerte</button>
    </div>
  )
}

export default ShowButton;
