import React,{useState,useEffect} from 'react'

const Data = () => {


    const [state, setState] = useState(false)
    const [data, setData] = useState(false)

    useEffect(() => {
    
        console.log("bonjour tout le monde")

        /* return(()=>{
            console.log("Bonsoir tout le monde")
        }) */
    },[data,state])


  return (
    <div className='text-center mt-16'>
       <h1> BONJOUR TOUT LE MONDE </h1>
      <div className='my-5'>
      <button onClick={()=>setState(!state)} className='p-3 border border-orange-300'> Cliquez </button>
      <button  onClick={()=>setData(!data)} className='p-3 ml-5 border border-cyan-300'> Cliquez </button>
      </div>
    </div>
  )
}

export default Data
