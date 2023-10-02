import React from 'react'
import AirPods from './AirPods'
import AsusVivoBook from './AsusVivoBook'
import Ipad from './Ipad'
import MacBook from './MacBook'

function Mui() {
  return (
    <div className='grid mt-5 bg-slate-50 gap-3 md:grid-cols-2  gid-cols-1 '>
       <AirPods/>
       <AsusVivoBook/>
       <Ipad/>
       <MacBook/>
      
    </div>
  )
}

export default Mui
