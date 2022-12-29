import React, { useState, useMemo, useEffect } from "react";
import Layout from "./layout";
import { useParams } from "react-router-dom";
import DetailModal from "../components/modal/detail-modal.component";
import Wayang from "../components/wayang/wayang.component";
import CardLoading from "../components/card-loading/card-loading.component";
import datasModule from "../utils/datas";

const DetailPage = () => {
  const { id } = useParams();
  const [wayang, setWayang] = useState(null);
  const getData = datasModule.getData;

  const dataWayang = useMemo(() => getData(Number(id), [id, getData]));

  useEffect(() => {
    setWayang(dataWayang);
  }, [dataWayang]);

  const [visibleModal, setVisibleModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = useState({
    type: "",
    videoLink: "",
    desc: "",
  });

  const CloseDetailModal = () => {
    setVisibleModal((prev) => !prev);
  };

  if (wayang === null) {
    return <p>Data Kosong</p>;
  }
  return (
    <Layout padding="pt-8">
      <div className="w-[1240px]">
        <div className="text-start text-base tracking-[0.22em] text-primary">
          <a href="/">Home</a> / <span>Wayang</span> /{" "}
          <span>{wayang.name}</span>
        </div>
        <div className="flex gap-28 w-full mx-auto h-[522px] mt-10">
          <div className="w-5/12 bg-card-background rounded-[50px] shadow-xl">
            <div className="flex justify-center items-center w-full h-full ">
              <Wayang
                onLoadHandler={() => setLoading(false)}
                object={wayang.object}
              />
              {loading && <CardLoading />}
            </div>
          </div>
          <div className="flex flex-col w-6/12 pt-3">
            <h2 className="font-semibold text-2xl">{wayang.name}</h2>
            <p className="text-lg tracking-[0.06em] font-light w-[533px] mt-6 mb-9">
              {wayang.desc}
            </p>
            <button className="bg-primary font-light text-lg w-fit text-white rounded-[10px] px-[30px] py-3">
              <a href={wayang.descLink}>Read More</a>
            </button>

            <div className="flex gap-[50px] mt-16">
              {wayang.addition.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-[18px] bg-card-background flex justify-center items-center cursor-pointer shadow-md w-[108px] h-[103px]"
                    onClick={() => {
                      setVisibleModal((prev) => !prev);
                      setModalData({
                        type: item.type,
                        videoLink: item.videoUrl,
                        desc: item.desc,
                      });
                    }}
                  >
                    <img
                      src={item.icon}
                      className="w-14 h-14"
                      alt={item.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {visibleModal ? (
        <DetailModal onCloseModalHandler={CloseDetailModal} {...modalData} />
      ) : null}
    </Layout>
  );
};

export default DetailPage;
