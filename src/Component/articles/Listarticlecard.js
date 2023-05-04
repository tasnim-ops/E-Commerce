import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Medicard from './Medicard';

import CardMedia from '@mui/material/CardMedia';



const Listarticlecard = () => {
const [articles,setarticle]=useState([])
useEffect(()=>{
    Getlistarticles();
}, []);

const Getlistarticles=async()=>{
      await axios.get("http://localhost:3001/api/articles").then(res=>{
        setarticle(res.data)
      }).catch(error=>{
        console.log(error)
      })
    }
    
  return ( 
    <div className="container-fluid">
        <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}> 
        {articles.map((art,ind)=>
         <Medicard reference={art.reference} prix={art.prix} image={art.imageart} qte={art.qtestock}/>
  )}
  </div>
  </div>
  )
}

export default Listarticlecard
