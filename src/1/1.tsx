import React from 'react';
import ChildApp from './child'; 

const obj = {
  name:'nitesh',
  age:34
}

export default function CustomApp() {
  return (
    <>
       <ChildApp objData={obj}/>
    </>
  )
}
