import React from 'react';


function Card({cardValue}) {
  
    return (
        <>
           
          
          <div className="grid grid-four-columns">

           {
            cardValue.map((curr)=>{
                const {name,price,img,catagories}=curr;
              return (
                
          <div className="card">
          <div className="img">
          <img src={img}/>
          </div>
          <div className="details">
          <h2>{name}</h2>
          <h3>{price}</h3>
          <button className="btn btn-primery">order now</button>
          
          </div>
          </div>
              )
            })
          } 
          </div>
          
        </>
    )
}

export default Card
