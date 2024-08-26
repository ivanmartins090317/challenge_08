import { useState,useEffect } from "react"


const App = () =>{
  const [catImage, setCatImage] = useState([])

  useEffect(() => { 
    try {
      fetch("https://api.thecatapi.com/v1/images/search?limit=3")
       .then(response => response.json())
       .then( data => setCatImage(data))
      
    } catch (error) {
      console.log(error);  
    }
  }, [])

const splitTree = catImage.splice(0,3)
 
console.log(catImage);

  return (
    <div style={{display:"flex"}} >
      {
        catImage.length > 0 && (
        splitTree.map(item =>(
          <div key={item.id} >
            <img style={{width:"200px"}} src={item.url} alt="imagem aleatoria de gatos" />
          </div>
        ))
      )
      }
    </div>

  )

}

export { App } 