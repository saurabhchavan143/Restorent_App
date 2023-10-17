import React,{useState} from 'react';
function Button({cardValue,Biodata,setBiodata}) {
     
     const [btncat, setbtncat] = useState(Biodata);

        //  button filter
         const filter=(cat)=>{
           if(cat=='All')
         {
             setBiodata(Biodata);
             return;
         }

         let res=Biodata.filter((curr)=>{
               return curr.catagories==cat;
         })
         
         
        setBiodata(res)
     }


       //set catagories in array
          const  catagoriesList=Biodata.map((curr)=>{
            return curr.catagories;
        });

          
    const commoncat=([...new Set(catagoriesList),"All"]);
    
    



    return (
        <>
                <div className="btns">
                 {
                  commoncat.map((curr)=>{
                      return <button onClick={()=>filter(curr)} className="btn">{curr}</button>
                  })
                }
            
                </div>
                  </>
            )
            }

export default Button;
