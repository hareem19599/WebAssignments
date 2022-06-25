import React from "react";
 function Flowers(){
    const flower = [
        {img: 'pictures/bigflower.jpg'},
        {img: 'pictures/g1 (5).jpeg'},
        {img: 'pictures/bigflower2.jpg'},
        {img: 'pictures/pink.jpg'},
        {img: 'pictures/orchid2.jpg'},
        {img: 'pictures/daisy.jpg'},
        {img: 'pictures/ruskflower (2).jpg'},
        {img: 'pictures/g1 (6).jpeg'},
        {img: 'pictures/g1 (7).jpeg'},
        {img: 'pictures/g1 (8).jpeg'},
        {img: 'pictures/ruskflower (1).jpg'},
        {img: 'pictures/g1 (9).jpeg'},
        {img: 'pictures/g1 (10).jpeg'},
        {img: 'pictures/g1 (13).jpeg'},
        {img: 'pictures/g1 (16).jpeg'},
        {img: 'pictures/g1 (15).jpeg'}
        
    ]
     return(
         <>
         <div className="container">
            <h1>FLOWERS</h1>
         </div>
         <div className="container">
         {flower.map((e)=>
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
 export default Flowers;

