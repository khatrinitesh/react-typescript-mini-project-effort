import React from 'react'

type Childprops = {
    objData:{
        name:string,
        age:number
    }
}

export default function ChildApp({objData}:Childprops) {
  return (
    <div>{objData.name} - {objData.age}</div>
  )
}
