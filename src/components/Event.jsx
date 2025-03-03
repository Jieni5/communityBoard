import React from 'react'


const Event = (props) => {
  return (
    <td className='event'>
        <box>
            <h3>{props.event}</h3>
            <img src= {props.img} width={200} height={150}/>
        </box>
        
    </td>
  )
}

export default Event;