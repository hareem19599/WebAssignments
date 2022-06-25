import React from "react";
 function Vogues(){
    const vogue = [
        {img: 'pictures/hailey.jpg'},
        {img: 'pictures/g1 (38).jpeg'},
        {img: 'pictures/taeyungvogue.jpg'},
        {img: 'pictures/2018.jpg'},
        {img: 'pictures/44.jpeg'},
        {img: 'pictures/42.jpeg'},
        {img: 'pictures/43.jpeg'},
        {img: 'pictures/g1 (20).jpeg'},
        {img: 'pictures/g1 (21).jpeg'},
        {img: 'pictures/g1 (40).jpeg'},
        {img: 'pictures/43.jpeg'},
        {img: 'pictures/g1 (17).jpeg'},
        {img: 'pictures/g1 (18).jpeg'},
        {img: 'pictures/g1 (19).jpeg'},
        {img: 'pictures/g1 (36).jpeg'},
        {img: 'pictures/g1 (37).jpeg'}
        
    ]
     return(
         <>
         <div className="container">
            <h1>VOGUES</h1>
         </div>
         <div className="container">
         {vogue.map((e)=>
             <div className="tc bg-light-gray dib br3 pa1 ma2 grow bw2 shadow-5">
             <div className="img">
            <img src={e.img}/>
            </div>
         </div>
         )}
         </div>
         </>
     )
 }
 export default Vogues;

