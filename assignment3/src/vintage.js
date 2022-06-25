import React from "react";
 function Vintage(){
    const vintage = [
        {img: 'pictures/yellow.jpg'},
        {img: 'pictures/g1 (22).jpeg'},
        {img: 'pictures/vinbig.jpg'},
        {img: 'pictures/vintage.jpg'},
        {img: 'pictures/last.jpg'},
        {img: 'pictures/41.jpeg'},
        {img: 'pictures/g1 (32).jpeg'},
        {img: 'pictures/g1 (23).jpeg'},
        {img: 'pictures/g1 (24).jpeg'},
        {img: 'pictures/g1 (25).jpeg'},
        {img: 'pictures/g1 (31).jpeg'},
        {img: 'pictures/g1 (26).jpeg'},
        {img: 'pictures/g1 (27).jpeg'},
        {img: 'pictures/g1 (28).jpeg'},
        {img: 'pictures/g1 (29).jpeg'},
        {img: 'pictures/g1 (30).jpeg'}
        
    ]
     return(
         <>
         <div className="container">
            <h1>VINTAGE</h1>
         </div>
         <div className="container">
         {vintage.map((e)=>
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
 export default Vintage;

