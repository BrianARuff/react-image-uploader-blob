import React from 'react';

export default function Img(props) {
  return (
    <img style={{height: '100px'}} className="border rounded-circle mx-auto d-block img-fluid mt-3" src={props.image} alt="Preview"/>
  )
}