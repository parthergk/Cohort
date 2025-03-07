import React from 'react'

interface propInter{
    placholder: string,
}

const TextInput = ({placholder}: propInter) => {
  return (
    <input type="text" placeholder={placholder} style={{
        margin: "2px",
        padding: "5px 6px",
        fontSize: "14px"
    }} />
  )
}

export default TextInput