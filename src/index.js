import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import one from './assets/image/dog1.jpg';
import two from './assets/image/dog2.jpeg';
import three from './assets/image/dog3.webp';
import four from './assets/image/dog4.webp';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Gallery(names){
  return(
 
      <div style={{backgroundColor:"white", border:"1px solid black",padding:"5px"}}>
      <img src={names.myimage} style={{width:"100%",height:"180px",objectFit:"cover"}}></img>
      <p style={{textAlign:"center"}}>{names.myname}</p>
    </div>
 
  )
}


// function One(names) {
//   return (
//     <div style={{ backgroundColor: "purple", padding: "10px",margin:"10px" }}>
//       <h1 style={{color:"white"}}>{names.myname}</h1>
//       <p style={{color:"white",fontSize:"25px"}}>{names.dept}</p>
//     </div>
//   )
// }

// var arr = ["henry", "mike", "el"]
// var dept = ["ces", "it", "ece"]

// array of object

// var person = [
//   {
//     myname:"henry",
//     dept:"cse"
//   }
// ]

var person = [
   {
    photo: one,
    names: "Julies Rabbit Ears"
    
   },
   {
    photo: two,
    names: "The innocent Look "
    
   },
   {
    photo: three,
    names: "Big Buggy"
    
   },
   {
    photo: four,
    names: "The saint Doggo"
    
   },
   {
    photo: one,
    names: "Julies Rabbit Ears"
    
   },
   {
    photo: three,
    names: "Big Buggy"
    
   },
   {
    photo: two,
    names: "The innocent Look "
    
   },
  
   {
    photo: four,
    names: "The saint Doggo"
    
   }
  
  ]
root.render(
  // <div>
  //   {
  //     person.map(function(items){
  //       return <One myname={items.myname} dept={items.dept}></One>
  //     })

  //   }


  // </div>

 <div style={{display:"grid",justifyContent:"center",gap:"20px",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
{
  person.map(function(items,index){
    return <div style={{display:"inline-block" }}>
      <Gallery myimage ={items.photo} myname ={items.names}></Gallery>
    </div>

  })
}
  

 </div>
);
