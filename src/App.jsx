import { useState } from "react"



const App = () =>{
  const [image, setImage] = useState(null)

  const handleClickImage = () =>{ 
    fetch('https://dog.ceo/api/breeds/image/random')
     .then(response => response.json())
     .then(data => setImage(data))   
  }
  
  return (
    <div>
      <div>{image?.message && <img src={image.message} alt="Dogs aleatori" width="200px"/>}</div>
      <button onClick={handleClickImage}>Buscar imagem</button>
    </div>
    
  )
}

export { App } 