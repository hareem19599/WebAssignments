import "react-color-palette/lib/css/styles.css";
import React from "react";
 function Cards(){
    const main = [{
        img: 'pictures/lisavogue.jpg',
        id: 'VOGUES',
        name: 'Fashion, Beauty, Art and lifestyle',
    },{
        img: 'pictures/download (1).jpg',
        id: 'FLOWERS',
        name: 'vibrant, blooming, beautiful flowers',
    },{
        img: 'pictures/vin2.png',
        id: 'VINTAGE',
        name: 'antique, quaint, retro, retrograde',
    }]
     return(
         <>
         <div className="container">
            <div className="cardcontainer">
         {main.map((e)=>
             <div className="tc bg-light-gray dib br4 pa4 ma4 grow bw2 shadow-5">
             <div>
            <img src={e.img}/>
            </div>
            <div className="details">
                <h4>{e.id}</h4>
                <p>{e.name}</p>
            </div>
         </div>
         )
         }
         </div>
         </div>
         </>
     )
 }
 export default Cards;
