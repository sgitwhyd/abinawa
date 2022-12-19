import React from "react";
import Gunungan from "../assets/loading.png";

export const Loading = () => {
  return (
    <div className="container mx-auto">
      <div className="w-40 flex justify-center items-center mx-auto">
        <img src={Gunungan} alt="Loading.." />
      </div>
    </div>
  );
};
