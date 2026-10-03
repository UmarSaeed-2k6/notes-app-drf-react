import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {


  const [Title, setTitle] = useState('')
  const [DESC, setDESC] = useState('')
  const [Data, setData] = useState([])



const fetchNotes =async ()=> {
try{
  const response = await fetch('http://127.0.0.1:8000/api/notes/')
  if(response.ok){
    const data = await response.json()
    setData(data)
  }
}catch(error){
  console.error("Failed to fetch: ", error)
}
}

useEffect(()=>{
fetchNotes()
},[])



const submitForm = async (e) => {
  e.preventDefault()
  
  const data = {
    title: Title,
    note: DESC,
  }


  try {
    const response = await fetch('http://127.0.0.1:8000/api/notes/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      const responseData = await response.json()
      alert("Backend per note chala gaya! ✅")
      setTitle('')
      setDESC('')
      fetchNotes() 
    }
  } catch (error) {
    alert("Server down hai ya network error! 🛑")
    console.error(error)
  }
}

  return (
    <div className='container'>
      <form onSubmit={(e)=>{submitForm(e)}} className='Notes_container'>
        <h1>Add Note:</h1>
        <input required
         onChange={(e)=>{
          setTitle(e.target.value)
        }} value={Title} className='tit' type="text" placeholder='Title' />
        <textarea 
        onChange={(e)=>{
          setDESC(e.target.value)
        }} value={DESC} placeholder='Add Description' className='desc' ></textarea>
        <button type="submit">add note</button>
      </form>
      <div  className='recentNotes'>
          <h1>Recent Notes:</h1>
          <div className='recent_notes_container_box'>
            {Data.map((val,idx)=>{
              return (
                <div key={idx} className='note'>
                  <p className='noteHead'>{val.title}</p>
                  <p className='noteContent'>{val.note}</p>
                </div>
              )
            })}
            
          </div>
      </div>
    </div>
  )
}

export default App