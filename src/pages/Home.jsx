import React, { useState } from "react";
import Layout from "./layout";
import DecorativeBar from "../assets/decorative-bar.png";
import Card from "../components/card/card.component";
import Gunungan from "../assets/gunungan.png";
import datasModule from "../utils/datas";
import { Link } from "react-router-dom";

const Home = () => {
  const datas = datasModule.datas;

  const [wayangItems, setWayangItems] = useState(datas.slice(0, 3));

  const shouldShow = () => wayangItems.length < datas.length;

  const toogleShouldShow = () => {
    if (shouldShow()) {
      setWayangItems((prev) => [
        ...prev,
        ...datas.slice(prev.length, prev.length + 3),
      ]);
    } else {
      setWayangItems(datas.slice(0, 3));
    }
  };

  return (
    <Layout width={"700px"}>
      <div className="w-full mx-auto text-center">
        <img src={Gunungan} className="w-24 h-24 mx-auto" alt="logo" />
        <h3 className="text-2xl text-[#4A576F]">Welcome to</h3>
        <h2 className="font-bold text-[32px]">Abinawa</h2>
        <h3 className="text-lg tracking-[0.19em] my-3 w-3/4 mx-auto">
          Interactive web to introduce Wayang with 3D models
        </h3>
        <img src={DecorativeBar} className="w-full" alt="" />
      </div>
      {/* search wauang */}
      <div className="w-full flex flex-col">
        <h4 className="text-lg text-center tracking-[0.19em] mt-9">
          Search Your Favorite Wayang
        </h4>
        <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-4 mt-8 justify-items-center">
          {wayangItems.map((data) => (
            <Link
              to={`/detail/${data.id}`}
              className="flex items-center justify-center"
              key={data.id}
            >
              <Card
                image={data.image}
                name={data.name}
                origin={data.origin}
                category={data.category}
              />
            </Link>
          ))}
        </div>
        <div className="flex items-start justify-center my-10">
          <button
            className="w-fit rounded-3xl px-5 py-3 text-white mx-auto font-medium text-lg"
            style={{
              background:
                "linear-gradient(73.19deg, #DC79FF 0%, #256BFA 95.06%)",
            }}
            onClick={toogleShouldShow}
          >
            {shouldShow() ? "Show More" : "Show Less"}
          </button>
        </div>
      </div>
      <div className="mx-auto py-5">
        <h2 className="font-bold text-center text-[32px] ">Abinawa</h2>
        <p className="text-lg tracking-[-0.014rem] w-[455px] mx-auto text-center my-3">
          It's not that difficult to find my contact information by searching
          realvjy. Know little more about me here
        </p>
        <img src={DecorativeBar} className="w-full" alt="" />
      </div>
    </Layout>
  );
};

export default Home;
