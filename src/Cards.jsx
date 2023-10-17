// import React,{useState,useEffect} from 'react';


// function Cards() {

//   const [user, setUser] = useState();
//    useEffect(() => {
//        featchdata();
       
//      }, [user])


//      const featchdata=async()=>{
//       try{
//      let response=await fetch("https://randomuser.me/api/?nat=us&results=1&page=1");   
//        let res=await response.json();

//           let data =await res.results[0];
//    // let biodata=await data.results[0];
//        // const biodata{}


//        console.log(data);
//        setUser(data);
        
        
          
//       }
//          catch(error)
//          {
//              alert(error);
//          }
// }




//     return (
//         <>
        
//         {
//             user.map((curr)=>{
//             const {gender,name,location,email,login}=curr;
//             return(
//                 <h1>{gender}</h1>
//             )
//            })
           
        
//         }
//         </>
//     )
// }

// export default Cards;
