import ItemList from "./ItemList";
import { useState } from "react";

const RestuarantCategory = ({ data, showIndex, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex(showIndex === null ? true : showIndex === false ? true : null); // Toggle the showIndex state
  };
  return (
    <div>
      {/* {Accordian Header} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          {showIndex ? <span>⬆</span> : <span>⬇</span>}
        </div>
        {/* {Accordian body} */}
        {/* If both true then show */}
        {showIndex && <ItemList items={data?.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestuarantCategory;
