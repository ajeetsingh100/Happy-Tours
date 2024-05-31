import React from "react";
import Card from "./Card";

function Cards({tours,removeTour}) {
    return (
        <div className="w-[90%] flex justify-center flex-wrap  gap-5  mx-auto py-5">
            {
                tours.map((tour)=>{
                   return  <Card tour={tour} key={tour.id} removeTour={removeTour}/>
                })
            }
        </div>
    ) 
}

export default Cards;