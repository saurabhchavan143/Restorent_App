import React,{useState} from 'react';
import Biodata from './Child';
import Card from './Card';
import Header from './Header';
import Button from './Button';


function Restorent() {
  const [biodata, setBiodata] = useState(Biodata);

  return (
    <div>
       <Header/>

       <div className="grid grid-two-columns">

       <div className="first-grid">
       <Button  cardValue={biodata} Biodata={Biodata} setBiodata={setBiodata}/>
       </div>

       <div className="secound-grid">
       <Card cardValue={biodata}/>
       </div>

       </div>
    </div>
  )
}

export default Restorent
