import data from "./data";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  const [tours, setTour] = useState(data);

  function removeTour(id) {
      setTour((tours)=>tours.filter((tour)=>{return tour.id!==id}))
    
  }
  
  
  function onClickHandler () {
    setTour(data);
  }

  if (tours.length === 0) {    
    return(
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">
      <div className="text-center font-bold text-2xl">No tours left</div>
      <button
        className="py-2 border bg-gray-200 border-gray-400 px-8 mt-3"
        onClick={onClickHandler}
      >
        Refresh
      </button>
    </div>
  )}
  return (
    <div>
      <div className="m-5 text-center flex justify-center">
        <h1 className="font-bold text-4xl    w-[max-content]">
          Happy Tours
        </h1>
      </div>
      <Cards tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
