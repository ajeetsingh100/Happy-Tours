import React, { useCallback, useState } from "react";

function Card({ tour, removeTour }) {
    const description=tour.info.length>200 ? (tour.info.substr(0,200)):(tour.info);
    const[readmore,setReadmore]=useState(false);
    function onClickHandler() {
        setReadmore(!readmore);
    }
  return (
    <div className=" py-3 px-2 flex flex-col gap-2 w-[350px]  h-[max-content]
    border shadow-[rgba(0,0,0,0.24) 0px 3px 8px] rounded-lg overflow-hidden text-justify">
      <img
        src={tour.image}
        alt="tours "
        className="aspect-square object-cover "
      />

      <div className="">
        <span>{tour.name}</span>
        <br />
        <span className="text-green-500 font-bold text-lg">
          &#8377; {tour.price}
        </span>
        <p>{readmore?(tour.info):(description)}</p>
        <span onClick={onClickHandler} className="text-blue-600 cursor-pointer">{readmore?(`showless`):(`readmore`)}</span>
      </div>
      <button
        className="border-2 border-orange-500 hover:bg-orange-500 py-3 rounded-md"
        onClick={() => {
          console.log(tour.id);
          removeTour(tour.id);
        }}
      >
        {" "}
        Not interested
      </button>
    </div>
  );
}

export default Card;
