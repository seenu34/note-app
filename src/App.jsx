import React, { useState } from 'react';

const App = () => {

  const [title,setTitle]=useState('')

  const [detail,setDetail]=useState('')

  const [task,setTask]=useState([])


  const submitForm=(e)=>{
     e.preventDefault()
    console.log(title)
    console.log(detail)
    const copyTask=[...task]
    copyTask.push({title,detail})
    console.log(copyTask)
    setTitle("")
    setDetail("")
    setTask(copyTask)
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task]
    console.log(copyTask)
    console.log(idx)
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return (
  <>
    <div>
      <form onSubmit={submitForm}>
        <div className='container'>
          <input onChange={(e)=>{
            console.log(e.target.value)
            setTitle(e.target.value)
          }}type="text" placeholder="enter note name" value={title} />
          <textarea onChange={(e)=>{
            console.log(e.target.value)
            setDetail(e.target.value)
          }} placeholder="enter note details" value={detail} ></textarea>
          <button>Add Note</button>     
        </div>
      </form>

    </div>
    <div className="actual">
            {task.map(function(elem,idx){
            
              return <div key={idx} className="con">
                 <h3>{elem.title}</h3>
                 <h3>{elem.detail}</h3>
                 <button onClick={()=>{
                       deleteNote(idx)
                 }}>Delete</button>
                     </div>

            })}     
    </div>
            
  
  </>
  )
}

export default App;
