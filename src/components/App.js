// create your App component here
import React, { useEffect, useState } from "react";

function App(){
    const [pics,setpics]=useState([])
    const [isLoading,setisLoading]=useState(true)
    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data=>{
            setpics(data.message)
            setisLoading(false)
        })
    },[])
return <main>
    {isLoading ? <p>Loading...</p>:<img src={pics} alt="A Random Dog"></img>}
</main>

}
export default App