import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import one from './assets/image/task.jpg';
import two from './assets/image/img2.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Gallery(names){
  return(
  <div style={{display:"flex"}}>
      <div style={{backgroundColor:"white", width:"200px", border:"1px solid black"}}>
      <img src={names.myimage} style={{width:"100%"}}></img>
      <p >{names.myname}</p>
    </div>
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
    names: "henry"
    
   },
   {
    photo: two,
    names: "john"
    
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

 <div>
{
  person.map(function(items,index){
    return <div style={{display:"flex"}}>
      <Gallery myimage ={items.photo} myname ={items.names}></Gallery>
    </div>

  })
}
  

 </div>
);
