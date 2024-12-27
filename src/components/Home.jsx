import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import ExtraSection from "./ExtraSection";

const Home = () => {
  const loadedData = useLoaderData();
  const [data, setData] = useState([]);
//   console.log(loadedData);
  const currentDate = new Date().toDateString()?.split(" ")[2];
  const currentDateOnly = parseInt(currentDate);
  
  useEffect(() => {
    const filterData = loadedData.filter(
      (item) => parseInt(item.deadline?.split("-")[2]) >= currentDateOnly
    );

    setData(filterData);
  }, []);
  return (
    <div >
      <Slider></Slider>
      <div className="w-11/12 mt-24 mb-14 mx-auto text-center">
        <h2 className="lg:text-3xl">Find Your Cause and Get Involved</h2>
        <p className="lg:w-9/12 mx-auto mt-5">Browse through a variety of impactful campaigns and find the ones closest to your heart. Your support can make a world of difference—start contributing today</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 w-11/12 gap-4 lg:gap-8 mx-auto">
        {data
          .map((user) => <Cards key={user._id} user={user}></Cards>)
          ?.slice(0, 6)}
      </div>
      <div>
        <ExtraSection></ExtraSection>
      </div>
    </div>
  );
};

export default Home;
