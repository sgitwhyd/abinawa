import React from "react";
import datas from "../../utils/datas";
import "./card.style.css";

const Card = (props) => {
  const data = datas[0];

  return (
    <div className="w-56 h-64 mx-auto md:mx-0">
      <div className=" rounded-[18px] card-container py-3 cursor-pointer">
        <img src={props.image} alt={props.name} className="w-3/4 mx-auto" />
        <div className="flex flex-col items-center gap-[2px] px-3">
          <p className="font-medium text-sm text-ligth-gray">
            ✦ {props.origin} ✦
          </p>
          <p className="text-base font-semibold">{props.name}</p>
          <p className="font-medium text-sm text-ligth-gray">
            {props.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
