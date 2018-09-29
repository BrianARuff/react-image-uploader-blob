import React from 'react';

export default function Img(props) {
  return (
    <img style={{height: '300px', filter: 'drop-shadow(0 0 5px)'}} className="border rounded-circle mx-auto d-block img-fluid mt-3" src={props.file} alt="Preview"/>
  )
}